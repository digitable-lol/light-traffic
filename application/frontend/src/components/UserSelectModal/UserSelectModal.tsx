import { User } from "context/UserContext"
import { ProfileCard } from "~components/ProfileCard"

import React from "react"

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material"

interface UserSelectModalProps {
  open: boolean
  onClose: () => void
  profiles: User[]
  onSelectProfile: (profileId: number) => void
}

const UserSelectModal: React.FC<UserSelectModalProps> = ({
  open,
  onClose,
  profiles,
  onSelectProfile,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select User</DialogTitle>
      <DialogContent>
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onClick={() => onSelectProfile(profile.id)}
            />
          ))
        ) : (
          <Typography>No users available</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default UserSelectModal

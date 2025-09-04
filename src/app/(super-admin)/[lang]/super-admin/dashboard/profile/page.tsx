'use client'
import AdminInfo from '@/src/components/common/AdminInfo';
import EditProfileModal from '@/src/components/pages/super-admin/profile/EditProfileModal';
import { Button } from '@/src/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/src/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/src/components/ui/avatar';
import { useUser } from '@clerk/nextjs';
import { EllipsisVertical, User } from 'lucide-react';
import React, { useState } from 'react';
import ChangePassModal from '@/src/components/pages/super-admin/profile/ChangePassModal';

const ProfileComponent: React.FC = () => {
  const { user, isSignedIn } = useUser();

  const handleProfileSubmit = (data: any) => {
    setIsLoading(true);
    console.warn("Editing profile:", data);
    // TODO: handle edit logic
    setTimeout(() => {
      setIsLoading(false);
      setIsEditModalOpen(false);
    }, 1000);
  };

  const handlePasswordSubmit = (data: any) => {
    setIsLoading(true);
    console.warn("Changing password:", data);
    // TODO: handle password change logic
    setTimeout(() => {
      setIsLoading(false);
      setIsPasswordModalOpen(false);
    }, 1000);
  };

  const [isLoading, setIsLoading] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const handleEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleChangePassword = () => {
    setIsPasswordModalOpen(true);
  };

  const actions = [
    {
      label: "Edit Profile",
      onClick: handleEditModal,
    },
    {
      label: "Change Password",
      onClick: handleChangePassword,
    }
  ];

  return (
    <div className='bg-[#f3f4f6] rounded-xl px-2 sm:px-9 py-6 space-y-6'>
      <h1 className='text-2xl font-semibold text-[#242424]'>Profile</h1>
      <div className='flex flex-col sm:flex-row justify-between gap-6'>
        <div className='w-full sm:w-[29rem] bg-white shadow-xs rounded-2xl'>
          <div className='relative bg-[#f3f4f6] flex flex-col gap-5 items-center rounded-2xl p-6 m-6'>
            <Avatar className="size-48 border">
              {isSignedIn && user.imageUrl ? (
                <AvatarImage
                  src={user.imageUrl}
                  alt="Profile"
                />
              ) : null}
              <AvatarFallback className="bg-white text-4xl">
                <User className="size-24 text-black"/>
              </AvatarFallback>
            </Avatar>

            <div className='space-y-2'>
              <h2 className="mt-2 text-center text-[#242424] font-bold text-2xl">{user?.fullName || 'Guest'}</h2>
              <p className="text-center text-[#4E4E4E] text-base">Super Admin</p>
            </div>
            {/* Dropdown */}
            <div className='absolute top-3 right-3'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="size-8 p-0 hover:bg-white">
                    <EllipsisVertical className="size-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {actions.map((action, index) => (
                    <DropdownMenuItem
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        action.onClick();
                      }}
                    >
                      {action.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        {/* Info */}
        <AdminInfo  disabled={true}/>
      </div>
      
      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleProfileSubmit}
        isLoading={isLoading}
      />
      
      {/* Change Password Modal */}
      <ChangePassModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        onSubmit={handlePasswordSubmit}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ProfileComponent;
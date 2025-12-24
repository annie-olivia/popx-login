import React from "react";

const Profile = () => {
  return (
    <>
      <div className="profile-header-bar" />
      <p className="profile-header-text">Account Settings</p>

      <div className="profile-avatar" />
      <div className="profile-camera" />

      <p className="profile-name rubik-800">Marry Doe</p>
      <p className="profile-email">Marry@gmail.com</p>

      <p className="profile-description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
        Sed Diam.
      </p>

      <div className="profile-line-top" />
      <div className="profile-line-bottom" />
    </>
  );
};

export default Profile;

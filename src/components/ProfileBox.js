function ProfileBox() {
    const profile_image_src = "https://pngrow.com/download/51988"
    const profile_name = "Renato"

    return (
        <div className="profileBoxContainer">
            <img src={profile_image_src} width="60%" height="width" alt="Foto de perfil" />
            <b>{profile_name}</b>
        </div>
    )
}

export default ProfileBox;
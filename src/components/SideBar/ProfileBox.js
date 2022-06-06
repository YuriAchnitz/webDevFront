function ProfileBox() {
    const profile_image_src = "https://r53.cooltext.com/rendered/cooltext412596489302650.gif"

    let uname = localStorage.getItem("username");
    if (uname === "") {
        uname = "Usuário"
    }

    const profile_name = uname;

    return (
        <div className="profileBoxContainer">
            <img src={profile_image_src} alt="Foto de perfil" />
            <b>{profile_name}</b>
        </div>
    )
}

export default ProfileBox;
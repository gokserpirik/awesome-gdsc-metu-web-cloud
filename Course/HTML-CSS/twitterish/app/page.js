
export default function Home() {
  return (
      <div className="container">
        {/* tüm elementleri kontrol edebilmek için wrapper kullandık */}
        <div className="wrapper">
          {/* sidenav'ın bulunacağı konumu daha iyi kontrol etmek için sidenavwrapper içine aldık */}
          <div className="sidenavwrapper">
            {/* sidenav'ın içindeki tüm elementleri kontrol edebilmek için sidenav kullandık */}
            <div className="sidenav">
            {/* logo ve item'lar için ayrı ayrı divler açtık */}
            <p className="logo">𝕏</p>
            <div className="item">
              {/* görsel isimlerini bilerek karmaşık tuttuk. tek tek yazmak yerine 
              sol panelden görseli ctrl+c yapıp src kısmına yapıştırın
              baştaki public kısmını silin(bu kısmı sonra anlatacağız.) */}
              <img src="/png/home_FILL0_wght400_GRAD0_opsz24.png" alt="" />
              <p>Home</p>
            </div>
            <div className="item">
              <img src="/png/tag_FILL0_wght400_GRAD0_opsz24.png" alt="" />
              <p>Explore</p>
            </div>
            <div className="item">
              <img src="/png/notifications_FILL0_wght400_GRAD0_opsz24.png" alt="" />
              <p>Notifications</p>
            </div>
            <div className="item">
              <img src="/png/morecircle.png" alt="" />
              <p>More</p>
            </div>

            {/* tweet/post butonu için ayrı bir div açtık */}
            <div className="post" >
              Post
            </div>

            {/* profile'ın konumunu kontrol etmek için wrapper içine aldık */}
            <div className="profilewrapper">
              {/* profile için ayrı bir div açtık */}
              <div className="profile">
                {/* profile image, name ve more butonu için ayrı ayrı divler açtık */}
                <div className="profile-image">
                  <img src="/profile.jpeg" alt="" />
                </div>
                <div className="profile-name">
                  <p>Jane Doe</p>
                  <p>@janedoe</p>
                </div>

                <div className="profile-more">
                    <img src="/png/more_horiz_FILL0_wght400_GRAD0_opsz24.png" alt="" />
                </div>
              </div>

            </div>


            </div>
          </div>
            
          {/* main(tweets ve sidebar)'in konumunu kontrol etmek için mainwrapper içine aldık */}
          <div className="mainwrapper">
            {/* tweets ve sidebar kısmını ayarlamadan önce kontrolü kolaylaştırmak için wrapper'larımızı oluşturduk */}
            <div className="tweetswrapper">
              B
              {/* TODO Bir sonraki derste buraya tweet'leri ekleyeceğiz */}
            </div>

            <div className="sidebarwrapper">
              {/* TODO Bir sonraki derste buraya sidebar'ı ekleyeceğiz */}
            </div>

          </div>
        </div>
      </div>


  )
}


/* useState ve useEffect client-side işlemler.
bu yüzden "use client" olarak belirtiyoruz. */
"use client";

import { useState, useEffect } from 'react';

/* react-icons package'ı üzerinden MdHome component'i çağırıyoruz. */
import { MdHome } from "react-icons/md";



/* User class'ı oluşturarak benzer data'mızı hem daha düzenli yapabiliyor
hem de gerekli işlemleri bütün benzer dataları istediğimiz işlemlerden geçirebiliyoruz. */
class User{
  get name(){
    return this._name;
  }
  get username(){
    return this._username;
  }
  get profileImage(){
    return this._profileImage;
  }

  constructor(name, username, profileImage){
    /* this._name yerine this.name yazarsak sadece getter tanımladığımıza
    yönelik bir hata alacağız. burada çözüm this._name kullanmak. */
    this._name = name;
    this._username = '@' + username;
    this._profileImage = profileImage;
  }
}

export default function Home() {

  /* oluşabilecek herhangi bir "undefined" hatasını önlemek için geçici data ekliyoruz. */
  const [user, setUser] = useState(new User('heyy', 'hey', 'hey'));
  
  /* loading, data'yı çekene kadarki kısımda bize yardımcı olacak. */
  const [loading, setLoading] = useState(true);

  /* asenkron olarak, aynı anda değil sırayla, işleyecek fonksiyonumuz kullanıcı verisini alıp User class'ı olarak user'a atayacak. */
  async function fetchUser() {
    
    const res = await fetch('https://gdsctwitterauth-6yuzbc3zha-uc.a.run.app/?username=test1&password=test2')
    const json = await res.json()
    /* json'umuz bize başarılı durumlarda status dönüyor. 200 başarılı işlem demek.
    diğer durumlar için placeholder bir data tanımladık. */
    if (json.status === 200) {
      setUser(new User(json.user.name, json.user.username, json.user.photo))
    } else{
      setUser(new User('Jane Doe', 'janedoe', '/profile.jpeg'))
    }
    setLoading(false);
  }

  /* sayfa yüklendiğinde fonksiyonumuz çalışacak */
  useEffect(() => {
    fetchUser();
  }
  , []);


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
             
              <MdHome /> {/* burada görsel kullanmak yerine import ettiğimiz package üzerinden icon çağırdık. */}
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
              {/* component değişikliğini loading üzerinden kontrol ediyoruz.
              structure: condition ? true: false
              */}
              {loading ? <p>Loading.</p> : <div className="profile">
                {/* profile image, name ve more butonu için ayrı ayrı divler açtık */}
                <div className="profile-image">
                  {/* tanımladığımız getter'lar üzerinden verimizi çağırıyoruz. */}
                   <img src={user.profileImage} alt="" />
                </div>
                <div className="profile-name">
                  <p>{user.name}</p>
                  <p>{user.username}</p>
                </div>

                <div className="profile-more">
                    <img src="/png/more_horiz_FILL0_wght400_GRAD0_opsz24.png" alt="" />
                </div>
              </div>
              }

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


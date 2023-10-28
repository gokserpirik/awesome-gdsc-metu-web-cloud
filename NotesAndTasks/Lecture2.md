# GDSC Web/Cloud 23 Ekim Notları ve Task'leri

##  Gelemeyenler için materyaller

ilk derste işlenen HTML Taglerinin uygulamalı tekrarı yapıldı. Slayt'a [buradan](https://docs.google.com/presentation/d/1GQJcDbbUjy6k5Q-ZdkaopgdKEm-A5wnS1JwztBoicBI/edit?usp=sharing) ulaşabilirsiniz

CSS selector'ları, ve bazı temel CSS tag'lerinden bahsettik ve uygulamalı olarak kullanımlarını inceledik.

* CSS selector'lar için [bu](https://www.youtube.com/watch?v=Z07d9Vu7GKM&ab_channel=Simplilearn) videoyu izleyebilirsiniz

 * Diğer işlenen tagler:
	 * [display](https://www.youtube.com/watch?v=9T8uxp5hQ60&ab_channel=BroCode)
	 * width/height - üstteki videoda anlatılıyor
	 * margin/padding
		 * [margin](https://www.youtube.com/watch?v=2ZlVV0MM1a0&ab_channel=BroCode)
		 * [padding](https://www.w3schools.com/css/css_padding.asp)
	 * border - margin videosunda anlatılıyor

NextJS ile proje açtık, bunun detaylarını aşağıdaki task'te bulabilirsiniz.

## Dictionary

Yazdığınız her komutun ne anlama geldiği bilmeniz sizin için çok iyi olacaktır. Eğer web kodlamaya yeni başlıyorsanız lütfen aşağıdaki kavramlardan hakim olmadıklarınız hakkında verilen materyelleri inceleyin.

##### npm
---
Web yazılımlari için paket yöneticisi görevi görür. Başka yazılımcılar tarafından yazılan kodları kendi sisteminize kurmak için kullanacaksınız. Bu kodların (kütüphane adı verilir) yeni versiyonlarının kurulması, silinmesi, ve bu kodları execute etme işi npm ile yapılır

Ayrıca yazdığınız kodu çalıştırma, build etme gibi çok temel işlemleri de npm ile yapacaksınız. Örnek olarak:

* npm run dev: Localhost'ta Development Server'ı çalıştırır. Yazdığınız web uygulaması, kullanıcıya gitmeden önce test ve geliştirme sürecinde **localhost** dediğimiz, sadece sizin bağlanabileceğiniz ve kendi bilgisayarınızın kurduğu bi sunucuda çalışır. `npm run dev` komutu bu localhost sunucusunu çalıştırmakla görevlidir.
* npm run build: Projenizin test edilme aşaması bittiğinde kendi alan adınıza ve sunucunuza (bunların ne olduğunu ilk derste konuşmuştuk) yüklemeniz gerekecek. Bu aşamada `npm run build` komutu projenizi sunucular tarafından okunabilir bi hale çevirecek.
* npm install <any_library>: başka insanlar tarafından yazılan kodları (kütüphaneler) kendi projenize indirir.
* npm -r <any_libary>: bu kütüphaneleri projeden silmek için kullanılır

https://www.youtube.com/watch?v=P3aKRdUyr0s&t=68s&ab_channel=CoderCoder

##### npx
---
executable komutlar için kullanılır, örneğin:
* proje oluşturmak
* proje silmek
* başka kişiler tarafından yazılan kodu çalıştırmak

https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/

#### terminal
---

npm, npx ve diğer temel bilgisayar komutlarını çalıştıracağımız yer. Terminali alıştırmak için Visual Studio Code uygulamasını açıp, Toolbar'daki **Terminal** kısmına tıklayabilirsiniz.

https://www.youtube.com/watch?v=OmQhOnBzg_k&ab_channel=GhostTogether

#### cd komutu
---

Terminalde her komut içinde bulunduğunuz klasör içinde çalıştırılır. Örneğin `dir` komutu terminalin çalıştığı klasördeki bütün dosyaları ekrana yazdırmak için kullanılır. Terminalin içinde bulunduğu klasörü değiştirmek için ise `cd` komutu kullanılır.

Örneğin:

`cd Desktop` ya da `cd Masaüstü` komutu (bilgisayarınız diline göre değişir) terminali Masaüstü klasörünün içine taşır. Eğer masaüstünde başka bi klasörünüz varsa, `cd Desktop` komutunu bir kere çalıştırdıktan sonra `cd <diğer klasörün adı>` komutunu çalıştırsanız, terminaliniz o klasöürün içine geçer

`cd ..` ise bir önceki klasöre geçmenizi sağlar.

Terminalinizin şu an içinde bulunduğu klasör ise terminalinizin her satırda en solunda yazar.
 
##### nextJS
---

Vercel Şirketi tarafından, React yazılım dili temel alınarak geliştirilen Javascript Framework'u. 

Web projelerimizi yazarken nextJS'i kullanacağız. 

## Tekrar için Task'ler

Bu task'ler hiçbir şekilde zorunlu değil, sadece sizin için iyi olacağını düşündüğümüz tekrar amaçlı şeyler. Eğer taskleri yaparken herhangi bir sorun yaşarsanız lütfen bana veya göksere ulaşmaktan çekinmeyin.

Kolay gelsin 😍

### NextJS Proje Açma

Derste ilk projemizi oluşturmuştuk, bu sefer de sizden tekrar farklı isimde bir proje oluşturmanızı bekliyoruz. Bu projeyi ilerki task'lerimizde de kullanacağız.

Sırasıyla yapmanız gerekenler:

* Masaüstünde (ya da rahat ettiğiniz herhangi bi yerde), içi boş bi klasör oluşturun.
* Daha sonra VSCode ile o klasörün içine girin. (Üstteki Toolbar'dan File'a tıklayın, Open Folder'ı seçin.).
* Klasöre girdikten sonra Terminal Açın.
* Şimdi bir NextJS projesi oluşturmak istiyoruz. Nasıl yapacağınızı [burada](https://nextjs.org/docs/getting-started/installation#automatic-installation) , **automatic installation** başlığı altında bulabilirsiniz. 
* Proje adı olarak **gdsc-web-task** olarak seçin, ve TypeScript sorusu dışındaki bütün sorulara kurulum programı tarafından önerilen cevaı verin. **TypeScript kullanmayacağız**.
* Kurulum işlemi tamamlandıktan sonra terminal'e `cd gdsc-web-task` yazarak oluşturduğumuz projenin içine geçiş yapın. 
* Daha sonra projeyi çalıştırmak için [buradaki](https://nextjs.org/docs/getting-started/installation#run-the-development-server), **run the development server** başlığı altındaki adımları takip edin. En sonunda **localhost:3000** adresinde aşağıdaki gibi bir resim görmeniz gereikyor - renkler farklı - olabilir.

![enter image description here](https://i.ibb.co/87cvXG1/Whats-App-Image-2023-10-24-at-09-11-49.jpg)


### CSS Öğrendiklerimizin Tekrarı

Task olarak, sizden bir google yazısı yazmanızı istiyoruz. Task:

kırmızı ve 5px'lik border'a sahip bir div'in içerisinde bir Google yazısı olmalı. Yazıdaki  her renk Google'ın kendi orjinal renkleriyle aynı olmalı. Bu renkleri [buradan](https://usbrandcolors.com/google-colors/) öğrenebilirsiniz. Yazı ile border dip dipe olmaması gerektiği için div'e 5px'lik bir padding tanımlanmalı. Bu div, yatay olarak ortada olmalı(mükemmel ortalanmasına gerek yok), ve dikey olarak sayfanın en üstünde olmalı. 

Kodu yazarken derste kullandığımız [codepen.io](codepen.io) adresini kullanabilirsiniz.

Örnek sonuç:

![Örnek sonuç](https://i.ibb.co/3cm8mzQ/Screenshot-43.png)

Öğrendiğimiz CSS tagleriyle yapılan bir çözüme [buradan](https://codepen.io/aangfanboy/pen/RwvrZMX) ulaşabilirsiniz, fakat çözüme bakmadan önce kendiniz denemenizi tavsiye ediyoruz.

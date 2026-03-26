# GitHub Profile Finder

React ile geliştirilmiş basit ve etkili bir GitHub kullanıcı profili arama uygulaması.  

Bu proje, kullanıcıların GitHub kullanıcı isimlerini girerek profillerini görüntülemelerini sağlar. Profil resmi, public repo sayısı, takipçi sayısı, hesap oluşturma tarihi ve GitHub profil linki ekranda gösterilir.

## Kullanılan Teknolojiler (Technologies Used)

- **React (React.js)** – Component tabanlı frontend geliştirme
- **Hooks (useState, useEffect)** – State ve lifecycle yönetimi
- **Async/Await & Fetch API** – API çağrısı ve veri çekme
- **Error Handling (try/catch)** – Hata yönetimi
- **Conditional Rendering** – Loading, error ve veri görüntüleme durumları
- **CSS Modules / App.css** – Basit ve temiz stil

## Nasıl Çalışır (How It Works)

1. Kullanıcı arama alanına bir GitHub kullanıcı adı girer.
2. "Search" butonuna basıldığında `fetchGitUsers` fonksiyonu çağrılır.
3. API’den gelen veri `userData` state’ine kaydedilir.
4. Kullanıcı profili **Profile** componenti aracılığıyla render edilir.
5. Loading ve error durumları kullanıcıya görsel olarak iletilir.

## Öne Çıkan Özellikler (Key Features)

- Profil resmi (avatar) gösterimi
- Public repos, followers ve account creation date
- GitHub profiline hızlı erişim linki
- Loading ve error state yönetimi
- Clean code ve profesyonel component yapısı

## Demo

Kullanıcı arama sonrası GitHub profiline yönlendirme:  
![Demo GIF / Video](link_to_your_video_or_gif)

---

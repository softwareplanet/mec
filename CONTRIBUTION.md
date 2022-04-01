<div align="center">
    <img alt="mec" src="./src/images/icon.png" width="60" />

# Інструкція з модерування контенту в додатку #
</div>

Додаток має три види сторінок з контентом:
- сторінка з категоріями техніки
- сторінка зі списком техніки за категоріями
- сторінки з інформацією про одиницю техніки

Кожна з цих сторінок має певну структуру збереження даних, критерії до розподілу файлів по директоріях і до властивостей зображень.

## Модерування сторінки з категоріями техніки ##

Список з категоріями зберігається масивом обʼєктів у серіалізованому файлі *.yaml*.

    /src/equipment/categories.yaml

Обʼєкти мають наступний вигляд у розмітці *yaml*:
    
    - name: airplanes
      title: Літаки
      image: ./images/airplane.jpg

У полі *name* вказується назва категорії англійською мовою, з маленької літери, одним словом. Оскільки це поле буде використане під час створення URL, воно не може містити недопустимі в URL символи.  

Поле *title* містить назву категорії українською мовою. Може містити будь-які символи, але не має бути довшим за 5-7 слів (або 45-50 символів).

У полі *image* має бути вказано шлях до зображення, що відображатиметься в якості іконки категорії. Шлях вказується відносно розташування файлу *categories.yaml*.

Зображення для категорій мають зберігатися в наступній директорії:

    /src/equipment/images/

Критерії до титульних зображень категорій:  
- формат файлу *.jpg*
- назва відповідає полю *name* з обʼєкту категорії
- зображення квадратне; роздільна здатність зображення 240 × 240 px

## Модерування вмісту категорій ##

Дані про техніку певної категорії знаходяться в наступній директорії:

    /src/equipment/<назва_категорії>/

Назва директорії має відповідати полю *name* з обʼєкту категорії у файлі *categories.yaml*. Кожна така директорія містить окремі папки з контентом про техніку.

## Модерування інформації про техніку ##

Папка з інформацією про техніку знаходиться в наступній директорії:

    /src/equipment/<назва_категорії>/<назва_техніки>

Структура даних в папці про техніку має наступний вигляд:
    
    <назва_категорії>       
    ↳ <назва_техніки>       
      ↳ images              
        ↳ picture(1).jpeg   
          picture(2).jpeg   
          picture(3).jpeg   
          picture(4).jpeg   
        index.md            
        <назва_техніки>.jpeg

Структура даних в папці про техніку на прикладі танку Т-90:

    tanks
    ↳ t-90
      ↳ images
        ↳ t-90(1).jpeg
          t-90(2).jpeg
          t-90(3).jpeg
          t-90(4).jpeg
        index.md
        t-90.jpeg

### Структура файлу markdown з інформацією про техніку ###

Файл markdown має називатися *index.md*. Формат *.md*, не *.mdх*. На початку файлу має бути frontmatter з наступними полями:
```yml
    ---
    title: <назва_техніки> 
    category: <назва_категорії> 
    image: ./<назва_техніки>.jpg
    source: <посилання на ресурс з інформацією про техніку>
    ---
```

У тілі markdown має міститися інформація про техніку. Інформація може бути різною, враховуючи різноманітні особливості тієї чи іншої техніки або категорії, деякі пункти можуть повторюватись, деякі можуть бути відсутніми або розташовуватися в іншому порядку, та загалом план такий:  
- декілька абзаців з корисною інформацією
- таблиця з характеристиками
- посилання на відеоматеріали з сервісу YouTube

Формат посилання на YouTube має бути наступним:

    https://youtu.be/<хеш_відео>

Загалом увесь текст має бути написано з урахуванням правил та особливостей мови розмітки Markdown.

### Критерії до зображень ###

Усі зображення мають бути якісними та відповідати техніці й категорії. Усі зображення для кожної одиниці техніки мають бути однаковими за співвідношенням сторін. Формат *.jpeg*. Роздільна здатність має бути в межах 800-1800 px.

### *Примітка!* ###

Назва кожної одиниці техніки та назва категорії мають збігатися всюди, де вони зустрічаються. Зокрема назва одиниці техніки має бути ідентичною:
- в директорії цієї техніки
- в полі *title* в frontmatter файлу markdown
- в назві титульного зображення техніки

Назва категорії має бути ідентичною:
- в директорії цієй категорії
- в полі *category* в frontmatter кожного її файлу markdown
- в полі *name* обʼєкту категорії в файлі *categories.yaml*
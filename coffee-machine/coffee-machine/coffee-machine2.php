<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://kit.fontawesome.com/09ac73c24f.js" crossorigin="anonymous"></script>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link href="css/style.css" rel="stylesheet">
    <title>Кофе машина</title>
  </head>
  <body>
    <div id="lock" hidden></div>
    <div class="navCoffee">Кофейня</div>
    <div class="container rounded mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class="coffee-btn-group my-3">
            <div class="coffee-btn rounded" onclick="getCoffee('Латте',42);"><i class="fas fa-coffee fa-lg" style="color:NavajoWhite;"></i></div>
            <span>Латте - 42</span>
          </div>
          <div class="coffee-btn-group my-3">
            <div class="coffee-btn rounded" onclick="getCoffee('Американо',47);">
              <i class="fas fa-coffee fa-lg" style="color:NavajoWhite;"></i>
            </div>
            <span>Американо - 47</span>
          </div>
          <div class="coffee-btn-group my-3">
            <div class="coffee-btn rounded" onclick="getCoffee('Эспрессо',61);">
              <i class="fas fa-coffee fa-lg" style="color:NavajoWhite;"></i>
            </div>
            <span>Эспрессо - 61</span>
          </div>
          <div class="coffee-btn-group my-3">
            <div class="coffee-btn rounded" onclick="getCoffee('Капучино',58);">
              <i class="fas fa-coffee fa-lg" style="color:NavajoWhite;"></i>
            </div>
            <span>Капучино - 58</span>
          </div>
          <div class="coffee-btn-group my-3">
            <div class="coffee-btn rounded" onclick="getCoffee('Лунго',44);">
              <i class="fas fa-coffee fa-lg" style="color:NavajoWhite;"></i>
            </div>
            <span>Лунго - 44</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row my-3">
            <div class="col-sm-6">
               <div id="display" class="p-3 text-center">
                <p id="displayInfo">Внесите деньги и закажите напиток</p>
                <p><i class="fas fa-wallet" style="color:#453203;"></i> Баланс: <span id="displayBalance">0</span>руб.</p>
                <div class="progress" style="background-color:NavajoWhite;">
                  <div class="progress-bar bg-warning" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <button id = "ButtonChange" class="btn btn-lg btn-light my-3" onclick="getChange(money.value)"><i class="fas fa-coins" style="color:#bdae2d"></i> Выдать сдачу</button>
              <div><img id ="coffeCup" src="img/cupCoffee.jpg" alt="coffee"></div>
            </div>
             <div class="col-sm-6 text-center">
              <input hidden id="money" type="text">
              <img id="bill_acc" src="img/bill_acc.png" alt="">
              <div id="change_box" class="mx-auto mt-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <img src="img/50rub.jpg" data-value="50" alt="50 рублей">
      <img src="img/100rub.jpg" data-value="100" alt="100 рублей">
      <img src="img/500rub.jpg" data-value="500" alt="500 рублей">
    </div>
    <script src="js/script.js"></script>
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

  </body>
</html>
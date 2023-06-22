# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
# # pin "firebase", to: "firebase@^9.0.0"
pin "firebase", to: "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"
pin "firebase/messaging", to: "https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js"

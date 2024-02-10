        const TelegramBot = require('node-telegram-bot-api');

        // Ваш токен от Bot Father
        const token = '6932732559:AAE4nZshjisU0y5vV25HP08hn9A2VgaX3zo';

        // Создаем экземпляр бота
        const bot = new TelegramBot(token, { polling: true });

        // Обработчик команды /start
        bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        const firstName = msg.from.first_name;
        bot.sendMessage(chatId, `Salom ${firstName} men "eho" botman`);
        });

        // Обработчик текстовых сообщений
        bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        const message = msg.text;

        // Отправляем обратно полученное сообщение
        bot.sendMessage(chatId, message);
        });

        console.log("Bot Muvofaqiyatli ichga tushdi!");

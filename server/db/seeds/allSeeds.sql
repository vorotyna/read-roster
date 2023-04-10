INSERT INTO users (
  first_name,
  password,
  email,
  phone_number
) VALUES (
  'Liso',
  '123',
  'alisa.vorotyn@gmail.com',
  '+16506648860'
);
INSERT INTO users (
  first_name,
  password,
  email,
  phone_number
) VALUES (
  'Luko',
  '123',
  'luka.mircetic@gmail.com',
  '+16503333655'
);


INSERT INTO books (user_id, title, author, location, photo) VALUES (1, 'A Thousand Splendid Suns', 'Khaled Hosseini', 'Liso Public Library', 'https://productimages.worldofbooks.com/074758589X.jpg');
INSERT INTO books (user_id, title, author, location, photo) VALUES (1, 'And The Mountains Echoed', 'Khaled Hosseini', 'Vancouver Public Library', 'https://m.media-amazon.com/images/I/51gXMIZ8sVL._AC_UF1000,1000_QL80_.jpg');
INSERT INTO books (user_id, title, author, location, photo) VALUES (1, 'It Ends With Us', 'Colleen Hoover', 'SF Public Library', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Chcpw13lL._AC_UF1000,1000_QL80_.jpg');
INSERT INTO books (user_id, title, author, location, photo) VALUES (1, 'Nosotros En La Luna', 'Alice Kellen', 'Liso Library', 'https://prodimage.images-bn.com/pimages/9786070774249_p0_v1_s1200x630.jpg');
INSERT INTO books (user_id, title, author, location, photo) VALUES (1, 'It Starts With Us', 'Colleen Hoover', 'Liso Library', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71PNGYHykrL._AC_UF1000,1000_QL80_.jpg');
INSERT INTO books (user_id, title, author, location, photo) VALUES (1, 'Where the Crawdads Sing', 'Delia Owens', 'Liso Library', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81HA6TJ5K-L._AC_UF1000,1000_QL80_.jpg');
INSERT INTO books (user_id, title, author, location, photo) VALUES (2, 'A Thousand Splendid Suns', 'Khaled Hosseini', 'Luko Library', 'https://productimages.worldofbooks.com/074758589X.jpg');


INSERT INTO alerts (book_id, user_id, due_date, alert_time, SMS, email) VALUES (1, 1, '2023-05-01', '2023-04-10T22:35', TRUE, FALSE);
INSERT INTO alerts (book_id, user_id, due_date, alert_time, SMS, email) VALUES (2, 1, '2023-04-27', '2023-04-10T22:35', TRUE, TRUE);
INSERT INTO alerts (book_id, user_id, due_date, alert_time, SMS, email) VALUES (3, 1, '2023-04-28', '2023-05-10T22:35', FALSE, TRUE);
INSERT INTO alerts (book_id, user_id, due_date, alert_time, SMS, email) VALUES (4, 1, '2023-05-21', '2023-05-10T22:35', FALSE, FALSE);
INSERT INTO alerts (book_id, user_id, due_date, alert_time, SMS, email) VALUES (5, 1, '2023-04-28', '2023-05-10T22:35', FALSE, TRUE);
INSERT INTO alerts (book_id, user_id, due_date, alert_time, SMS, email) VALUES (6, 1, '2023-04-20', '2023-05-10T22:35', TRUE, TRUE);
INSERT INTO alerts (book_id, user_id, due_date, alert_time, SMS, email) VALUES (7, 2, '2023-04-29', '2023-05-10T22:35', FALSE, FALSE);

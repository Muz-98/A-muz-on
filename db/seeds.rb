# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ username: 'Star Wars' }, { username: 'Lord of the Rings' }])
#   Character.create(username: 'Luke', movie: movies.first)

Product.destroy_all
User.destroy_all

#Demo User 
demoUser = User.create!(username: 'Jeff Bezos', email: 'bezos1994@ebay.com', password: 'amuzon')

# Seed Products
retroVince = Product.create!(name: 'Retro Vince Carter Raptors Jersey', description: '1998-1999 Mitchell & Ness Swingman Throwback Jersey', price: 149.99)
retroKobe = Product.create!(name: 'Retro Kobe Bryant Lakers Jersey', description: '1996-1997 Mitchell & Ness Swingman Throwback Jersey', price: 299.99)
retroMJ = Product.create!(name: 'Retro Michael Jordan Bulls Jersey', description: '1985-1986 Mitchell & Ness Swingman Throwback Jersey', price: 299.99)
retroLarry = Product.create!(name: 'Retro Larry Bird Celtics Jersey', description: '1985-1986 Mitchell & Ness Swingman Throwback Jersey', price: 149.99)
retroMagic = Product.create!(name: 'Retro Magic Johnson Lakers Jersey', description: '1989-1990 Mitchell & Ness Swingman Throwback Jersey', price: 149.99)
retroKareem = Product.create!(name: 'Retro Kareem Abdul Jabbar Bucks Jersey', description: '1970-1971 Mitchell & Ness Swingman Throwback Jersey', price: 149.99)
normKobe = Product.create!(name: '2010-2011 Kobe Bryant Lakers Jersey', description: 'Authentic Mitchell & Ness Swingman Replica Jersey', price: 119.99)
normLebron = Product.create!(name: '2015-2016 Lebron James Cavaliers Jersey', description: 'Authentic Mitchell & Ness Swingman Replica Jersey', price: 119.99)
normCurry = Product.create!(name: '2019-2020 Stephen Curry Warriors Jersey', description: 'Authentic Mitchell & Ness Swingman Replica Jersey', price: 119.99)
normLuka = Product.create!(name: '2020-2021 Luka Doncic Mavericks Jersey', description: 'Authentic Mitchell & Ness Swingman Replica Jersey', price: 119.99)
normLillard = Product.create!(name: '2019-2020 Damian Lillard Blazers Jersey', description: 'Authentic Mitchell & Ness Swingman Replica Jersey', price: 119.99)
normKD = Product.create!(name: '2020-2021 Kevin Durant Nets Jersey', description: '1998-1999 Mitchell & Ness Swingman Replica Jersey', price: 119.99)
nflLamar = Product.create!(name: 'Lamar Jackson Ravens NFL Jersey', description: 'Mens Nike Game Player Jersey', price: 99.99) 
nflMahomes = Product.create!(name: 'Patrick Mahomes Chiefs NFL Jersey', description: 'Mens Nike Game Player Jersey', price: 99.99) 
nflArod = Product.create!(name: 'Aaron Rodgers Packers NFL Jersey', description: 'Mens Nike Game Player Jersey', price: 99.99)
nflRussell = Product.create!(name: 'Russell Wilson Seahawks NFL Jersey', description: 'Mens Nike Game Player Jersey', price: 99.99) 
nflObj = Product.create!(name: 'Odell Beckham Jr Browns NFL Jersey', description: 'Mens Nike Game Player Jersey', price: 99.99) 
nflBrady = Product.create!(name: 'Tom Brady Buccaneers NFL Jersey', description: 'Mens Nike Game Player Jersey', price: 99.99) 
nflKamara = Product.create!(name: 'Alvin Kamara Saints NFL Jersey', description: 'Mens Nike Game Player Jersey', price: 99.99) 
nflDeshaun = Product.create!(name: 'Deshaun Watson Texans NFL Jersey', description: 'Mens Nike Game Player Jersey', price: 99.99 )

image1 = open('https://amuzon-seeds.s3.amazonaws.com/VinceCarterRetro1.jpg')
image2 = open('https://amuzon-seeds.s3.amazonaws.com/VinceCarterRetro2.jpg')
image3 = open('https://amuzon-seeds.s3.amazonaws.com/KobeRetro1.jpg')
image4 = open('https://amuzon-seeds.s3.amazonaws.com/MichaelJordanRetro1.jpg')
image5 = open('https://amuzon-seeds.s3.amazonaws.com/MichaelJordanRetro2.jpg')
image6 = open('https://amuzon-seeds.s3.amazonaws.com/LarryBirdRetro1.jpg')
image7 = open('https://amuzon-seeds.s3.amazonaws.com/LarryBirdRetro2.jpeg')
image8 = open('https://amuzon-seeds.s3.amazonaws.com/MagicJohnsonRetro1.jpg')
image9 = open('https://amuzon-seeds.s3.amazonaws.com/MagicJohnsonRetro2.jpg')
image10 = open('https://amuzon-seeds.s3.amazonaws.com/KareemRetro1.jpeg')
image11 = open('https://amuzon-seeds.s3.amazonaws.com/KareemRetro2.jpg')
image12 = open('https://amuzon-seeds.s3.amazonaws.com/KobeNorm1.jpg')
image13 = open('https://amuzon-seeds.s3.amazonaws.com/KobeNorm2.jpg')
image14 = open('https://amuzon-seeds.s3.amazonaws.com/LebronNorm1.jpg')
image15 = open('https://amuzon-seeds.s3.amazonaws.com/LebronNorm2.jpg')
image16 = open('https://amuzon-seeds.s3.amazonaws.com/CurryNorm1.jpeg')
image17 = open('https://amuzon-seeds.s3.amazonaws.com/CurryNorm2.jpg')
image18 = open('https://amuzon-seeds.s3.amazonaws.com/LukaDoncicNorm1.jpeg')
image19 = open('https://amuzon-seeds.s3.amazonaws.com/LukaDoncicNorm2.jpg')
image20 = open('https://amuzon-seeds.s3.amazonaws.com/LillardNorm1.jpeg')
image21 = open('https://amuzon-seeds.s3.amazonaws.com/LillardNorm2.jpeg')
image22 = open('https://amuzon-seeds.s3.amazonaws.com/KDNorm1.jpeg')
image23 = open('https://amuzon-seeds.s3.amazonaws.com/KDNorm2.jpg')
image24 = open('https://amuzon-seeds.s3.amazonaws.com/LamarJacksonNFL1.jpeg')
image25 = open('https://amuzon-seeds.s3.amazonaws.com/LamarJacksonNFL2.jpg')
image26 = open('https://amuzon-seeds.s3.amazonaws.com/MahomesNFL1.jpg')
image27 = open('https://amuzon-seeds.s3.amazonaws.com/MahomesNFL2.jpeg')
image28 = open('https://amuzon-seeds.s3.amazonaws.com/AaronRodgersNFL1.jpeg')
image29 = open('https://amuzon-seeds.s3.amazonaws.com/AaronRodgersNFL2.jpg')
image30 = open('https://amuzon-seeds.s3.amazonaws.com/RussellWilsonNFL1.jpg')
image31 = open('https://amuzon-seeds.s3.amazonaws.com/RussellWilsonNFL2.jpg')
image32 = open('https://amuzon-seeds.s3.amazonaws.com/OdellNFL1.jpg')
image33 = open('https://amuzon-seeds.s3.amazonaws.com/OdellNFL2.jpg')
image34 = open('https://amuzon-seeds.s3.amazonaws.com/TomBradyNFL1.jpeg')
image35 = open('https://amuzon-seeds.s3.amazonaws.com/TomBradyNFL2.jpeg')
image36 = open('https://amuzon-seeds.s3.amazonaws.com/KamaraNFL1.jpeg')
image37 = open('https://amuzon-seeds.s3.amazonaws.com/KamaraNFL2.jpeg')
image38 = open('https://amuzon-seeds.s3.amazonaws.com/DehsaunWatsonNFL1.jpeg')
image39 = open('https://amuzon-seeds.s3.amazonaws.com/DehsaunWatsonNFL2.jpg')
image40 = open('https://amuzon-seeds.s3.amazonaws.com/MagicJohnsonRetro3.jpg')

retroVince.photos.attach(io: image1, filename: 'VinceCarterRetro1.jpg')
retroVince.photos.attach(io: image2, filename: 'VinceCarterRetro2.jpg')

retroKobe.photos.attach(io: image3, filename: 'KobeRetro1.jpg')

retroMJ.photos.attach(io: image4, filename: 'MichaelJordanRetro1.jpg')
retroMJ.photos.attach(io: image5, filename: 'MichaelJordanRetro2.jpg')

retroLary.photos.attach(io: image6, filename: 'LaryBirdRetro1.jpg')
retroLary.photos.attach(io: image7, filename: 'LaryBirdRetro2.jpeg')

retroMagic.photos.attach(io: image8, filename: 'MagicJohnsonRetro1.jpg')
retroMagic.photos.attach(io: image9, filename: 'MagicJohnsonRetro2.jpg')
retroMagic.photos.attach(io: image40, filename: 'MagicJohnsonRetro3.jpg')

retroKareem.photos.attach(io: image10, filename: 'KareemRetro1.jpeg')
retroKareem.photos.attach(io: image11, filename: 'KareemRetro2.jpg')

normKobe.photos.attach(io: image12, filename: 'KobeNorm1.jpg')
normKobe.photos.attach(io: image13, filename: 'KobeNorm2.jpg')

normLebron.photos.attach(io: image14, filename: 'LebronNorm1.jpg')
normLebron.photos.attach(io: image15, filename: 'LebronNorm2.jpg')

normCurry.photos.attach(io: image16, filename: 'CurryNorm1.jpeg')
normCurry.photos.attach(io: image17, filename: 'CurryNorm2.jpg')

normLuka.photos.attach(io: image18, filename: 'LukaDoncicNorm1.jpeg')
normLuka.photos.attach(io: image19, filename: 'LukaDoncicNorm2.jpg')

normLillard.photos.attach(io: image20, filename: 'LillardNorm1.jpeg')
normLillard.photos.attach(io: image21, filename: 'LillardNorm2.jpeg')

normKD.photos.attach(io: image22, filename: 'KDNorm1.jpeg')
normKD.photos.attach(io: image23, filename: 'KDNorm2.jpg')

nflLamar.photos.attach(io: image24, filename: 'LamarJacksonNFL1.jpeg')
nflLamar.photos.attach(io: image25, filename: 'LamarJacksonNFL2.jpg')

nflMahomes.photos.attach(io: image26, filename: 'MahomesNFL1.jpg')
nflMahomes.photos.attach(io: image27, filename: 'MahomesNFL2.jpeg')

nflArod.photos.attach(io: image28, filename: 'AaronRodgersNFL1.jpeg')
nflArod.photos.attach(io: image29, filename: 'AaronRodgersNFL2.jpg')

nflRussell.photos.attach(io: image30, filename: 'RussellWilsonNFL1.jpg')
nflRussell.photos.attach(io: image31, filename: 'RussellWilsonNFL2.jpg')

nflObj.photos.attach(io: image12, filename: 'OdellNFL1.jpg')
nflObj.photos.attach(io: image13, filename: 'OdellNFL2.jpg')

nflBrady.photos.attach(io: image12, filename: 'TomBradyNFL1.jpeg')
nflBrady.photos.attach(io: image13, filename: 'TomBradyNFL2.jpeg')

nflKamara.photos.attach(io: image12, filename: 'KamaraNFL1.jpeg')
nflKamara.photos.attach(io: image13, filename: 'KamaraNFL2.jpeg')

nflDeshaun.photos.attach(io: image12, filename: 'DeshaunWatsonNFL1.jpeg')
nflDeshaun.photos.attach(io: image13, filename: 'DeshaunWatsonNFL2.jpg')
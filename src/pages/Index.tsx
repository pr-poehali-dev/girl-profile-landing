import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activePhoto, setActivePhoto] = useState(0);
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/620c216f-bde8-41ad-8f1b-a9ee4d22bb1d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: 'Сообщение отправлено! 🎉',
          description: 'Скоро с вами свяжутся',
        });
        setFormData({ name: '', contact: '', message: '' });
      } else {
        toast({
          title: 'Ошибка отправки',
          description: result.error || 'Попробуйте позже',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка соединения',
        description: 'Проверьте интернет',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const photos = [
    'https://cdn.poehali.dev/projects/f74af6d8-ba73-4a21-9308-a8ed665d227b/files/b92dee49-2f69-4bc2-a3e6-2a0c086651c9.jpg',
    'https://cdn.poehali.dev/projects/f74af6d8-ba73-4a21-9308-a8ed665d227b/files/a9614c32-4b02-466f-9bff-e61667f3435c.jpg',
    'https://cdn.poehali.dev/projects/f74af6d8-ba73-4a21-9308-a8ed665d227b/files/8a87edc3-0c53-4cd2-83f6-18c6caed49ac.jpg',
  ];

  const interests = [
    { icon: 'Music', label: 'Музыка', color: 'bg-gradient-to-br from-pink-400 to-purple-500' },
    { icon: 'Book', label: 'Книги', color: 'bg-gradient-to-br from-orange-400 to-pink-500' },
    { icon: 'Camera', label: 'Фотография', color: 'bg-gradient-to-br from-purple-400 to-indigo-500' },
    { icon: 'Plane', label: 'Путешествия', color: 'bg-gradient-to-br from-cyan-400 to-blue-500' },
    { icon: 'Coffee', label: 'Кофе', color: 'bg-gradient-to-br from-amber-400 to-orange-500' },
    { icon: 'Sparkles', label: 'Искусство', color: 'bg-gradient-to-br from-rose-400 to-pink-500' },
  ];

  const reviews = [
    { name: 'Михаил К.', text: 'Замечательный человек! Очень приятное общение 💫', rating: 5 },
    { name: 'Алексей В.', text: 'Всё прошло отлично, рекомендую! 🌟', rating: 5 },
    { name: 'Дмитрий С.', text: 'Профессионально и душевно! Спасибо 🎉', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
        <section className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-orange-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <img
              src={photos[activePhoto]}
              alt="Алиса"
              className="relative w-64 h-64 rounded-full object-cover border-8 border-white shadow-2xl mx-auto transition-all duration-500 hover:scale-105"
            />
          </div>
          
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
            Алиса ✨
          </h1>
          
          <p className="text-xl text-gray-700 mb-6">24 года • Москва 🌆</p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://t.me/Wonderful_Alice7', '_blank')}
            >
              <Icon name="Send" className="mr-2" size={20} />
              Telegram
            </Button>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://wa.me/79628608529', '_blank')}
            >
              <Icon name="Phone" className="mr-2" size={20} />
              WhatsApp
            </Button>
          </div>
        </section>

        <section className="mb-12 animate-slide-up">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                <span className="text-4xl">🎀</span> О себе
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Привет! Я Алиса — творческая и позитивная девушка, которая обожает жизнь во всех её проявлениях. 
                Люблю узнавать новое, общаться с интересными людьми и создавать незабываемые моменты. 
                Верю, что каждая встреча — это маленькое приключение! 🌈
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12 animate-scale-in">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
            💝 Мои интересы
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              >
                <CardContent className={`p-6 ${interest.color} text-white`}>
                  <div className="flex flex-col items-center gap-3">
                    <Icon name={interest.icon as any} size={32} className="drop-shadow-lg" />
                    <span className="font-semibold text-lg">{interest.label}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            📸 Галерея
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                onClick={() => setActivePhoto(index)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${
                  activePhoto === index ? 'ring-4 ring-pink-500 shadow-2xl' : 'shadow-lg'
                }`}
              >
                <img
                  src={photo}
                  alt={`Фото ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                {activePhoto === index && (
                  <div className="absolute top-3 right-3 bg-pink-500 text-white rounded-full p-2">
                    <Icon name="Heart" size={20} fill="white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            ⭐ Отзывы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-500" fill="#eab308" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 italic">{review.text}</p>
                  <p className="font-semibold text-pink-600">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 animate-scale-in">
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
                <Icon name="Mail" size={32} className="text-pink-600" />
                Напишите мне
              </h2>
              <p className="text-center text-gray-600 mb-6">Оставьте сообщение и я обязательно отвечу! 💌</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-lg border-2 focus:border-pink-400"
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Telegram или телефон"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    required
                    className="text-lg border-2 focus:border-pink-400"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="text-lg border-2 focus:border-pink-400 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12 animate-fade-in">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <Icon name="MessageCircle" size={32} />
                Контакты
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Или свяжитесь напрямую! 📱
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-pink-600 hover:bg-pink-50 font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://t.me/Wonderful_Alice7', '_blank')}
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  @Wonderful_Alice7
                </Button>
                
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-green-600 hover:bg-green-50 font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('tel:+79628608529')}
                >
                  <Icon name="Phone" className="mr-2" size={20} />
                  +7 962 860 85 29
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="text-center py-8 text-gray-600">
          <p className="text-sm">Made with 💖 • 2024</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
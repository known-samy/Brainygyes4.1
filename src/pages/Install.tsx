import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Smartphone, Monitor, CheckCircle2, Share, MoreVertical } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Detect device type
    const userAgent = navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));
    setIsAndroid(/android/.test(userAgent));

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for successful install
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  return (
    <>
      <SEOHead
        title="Install BrainyGyes App | Add to Home Screen"
        description="Install the BrainyGyes Technology app on your device for quick access to our digital solutions and services."
        keywords="install app, PWA, progressive web app, BrainyGyes app, add to home screen"
        canonicalUrl="https://www.brainygyes.com/install"
      />
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Install BrainyGyes App
            </h1>
            <p className="text-lg text-muted-foreground">
              Get quick access to our services right from your home screen. Works offline and loads instantly!
            </p>
          </div>

          {isInstalled ? (
            <Card className="max-w-md mx-auto bg-card border-border">
              <CardContent className="pt-6 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-foreground mb-2">Already Installed!</h2>
                <p className="text-muted-foreground">
                  BrainyGyes is already installed on your device. Look for it on your home screen!
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Install Button Card - Shows when prompt is available */}
              {deferredPrompt && (
                <Card className="md:col-span-2 bg-primary/5 border-primary/20">
                  <CardContent className="pt-6 text-center">
                    <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="text-xl font-semibold text-foreground mb-2">Ready to Install</h2>
                    <p className="text-muted-foreground mb-4">
                      Click the button below to install BrainyGyes on your device.
                    </p>
                    <Button onClick={handleInstallClick} size="lg" className="gap-2">
                      <Download className="w-5 h-5" />
                      Install App
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* iOS Instructions */}
              <Card className={`bg-card border-border ${isIOS ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-foreground">iPhone / iPad</CardTitle>
                      <CardDescription>Safari Browser</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">1</span>
                      <span>Tap the <Share className="inline w-4 h-4" /> Share button at the bottom of Safari</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">2</span>
                      <span>Scroll down and tap <strong>"Add to Home Screen"</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">3</span>
                      <span>Tap <strong>"Add"</strong> in the top right corner</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              {/* Android Instructions */}
              <Card className={`bg-card border-border ${isAndroid && !deferredPrompt ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-foreground">Android</CardTitle>
                      <CardDescription>Chrome Browser</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">1</span>
                      <span>Tap the <MoreVertical className="inline w-4 h-4" /> menu button (three dots)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">2</span>
                      <span>Tap <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">3</span>
                      <span>Confirm by tapping <strong>"Install"</strong></span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              {/* Desktop Instructions */}
              <Card className="md:col-span-2 bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Monitor className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-foreground">Desktop</CardTitle>
                      <CardDescription>Chrome, Edge, or other Chromium browsers</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Look for the install icon <Download className="inline w-4 h-4" /> in the address bar, or click the menu and select <strong>"Install BrainyGyes Technology"</strong>.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Benefits Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Why Install Our App?</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="text-center p-6 rounded-lg bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Instant Access</h3>
                <p className="text-sm text-muted-foreground">Launch directly from your home screen</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Works Offline</h3>
                <p className="text-sm text-muted-foreground">Access content even without internet</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Fast & Reliable</h3>
                <p className="text-sm text-muted-foreground">Loads instantly, just like a native app</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </>
  );
};

export default Install;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MaasaiMaraGallery from "./pages/MaasaiMaraGallery";
import DianiBeachGallery from "./pages/DianiBeachGallery";
import TsavoGallery from "./pages/TsavoGallery";
import AmboseliGallery from "./pages/AmboseliGallery";
import LakeNakuruGallery from "./pages/LakeNakuruGallery";
import SamburuGallery from "./pages/SamburuGallery";
import LamuGallery from "./pages/LamuGallery";
import HellsGateGallery from "./pages/HellsGateGallery";
import FortJesusGallery from "./pages/FortJesusGallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="kenya-tourism-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/maasai-mara-gallery" element={<MaasaiMaraGallery />} />
            <Route path="/diani-beach-gallery" element={<DianiBeachGallery />} />
            <Route path="/tsavo-gallery" element={<TsavoGallery />} />
            <Route path="/amboseli-gallery" element={<AmboseliGallery />} />
            <Route path="/lake-nakuru-gallery" element={<LakeNakuruGallery />} />
            <Route path="/samburu-gallery" element={<SamburuGallery />} />
            <Route path="/lamu-gallery" element={<LamuGallery />} />
            <Route path="/hells-gate-gallery" element={<HellsGateGallery />} />
            <Route path="/fort-jesus-gallery" element={<FortJesusGallery />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

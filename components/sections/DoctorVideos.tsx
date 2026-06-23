import { AnimatedSection } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";

const DOCTORS = [
  {
    name: "医師名 A",
    title: "脳神経外科 部長",
    comment:
      "ZAP X は精度・安全性ともに現在の放射線手術の中で最も優れたシステムです。患者さんへの負担を最小限に抑えながら、最大の治療効果を提供できると確信しています。",
    videoId: null, // YouTube video ID — populated when available
  },
  {
    name: "医師名 B",
    title: "放射線科 科長",
    comment:
      "非侵襲的な治療が可能になることで、従来は手術リスクが高かった患者さんにも治療の選択肢が広がります。ZAP X の導入により、より多くの方々に最適な治療を届けられます。",
    videoId: null,
  },
];

function VideoPlaceholder({ doctorName }: { doctorName: string }) {
  return (
    <div className="aspect-video rounded-xl bg-zapx-navy border border-border flex flex-col items-center justify-center gap-3 group hover:border-zapx-cyan/40 transition-colors">
      <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:border-zapx-cyan/40 transition-colors">
        <svg
          className="w-6 h-6 text-muted-foreground ml-1"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <p className="text-xs text-muted-foreground text-center">
        {doctorName}の動画は
        <br />
        近日公開予定
      </p>
      <Badge
        variant="outline"
        className="text-zapx-cyan border-zapx-cyan/40 text-xs"
      >
        Coming Soon
      </Badge>
    </div>
  );
}

export function DoctorVideos() {
  return (
    <section id="doctors" className="py-24 md:py-40 bg-zapx-navy relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs text-zapx-cyan tracking-[0.4em] uppercase mb-4">
            Expert Doctors
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6">専門医の声</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ZAP X 担当医師が、この治療法の可能性について詳しく解説します。
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {DOCTORS.map((doctor, i) => (
            <AnimatedSection key={doctor.name} delay={i * 0.15}>
              <div className="flex flex-col gap-5">
                {doctor.videoId ? (
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${doctor.videoId}`}
                      title={`${doctor.name} の動画`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <VideoPlaceholder doctorName={doctor.name} />
                )}
                <div className="p-5 rounded-xl border border-border bg-zapx-navy-mid">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-zapx-cyan/10 border border-zapx-cyan/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-zapx-cyan text-sm font-bold">
                        Dr
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-sm">{doctor.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {doctor.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {doctor.comment}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

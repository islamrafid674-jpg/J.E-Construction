import { motion } from "motion/react";
import { TiltCard } from "./TiltCard";

const images = [
  { src: "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/591162643_17888110827403936_7018483084988774347_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=Mzc4NjI5MzQ0OTk0ODU0NzYxMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=gt8c-xil7-EQ7kNvwE4BMo3&_nc_oc=AdpKNUV6NBgVxjs4n9mmxdTjInl1XET4BiD1Fkaw6xphnqBZMvVS3sZX8nyoBjXOaZE&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=J3ZZNx60hVFqVnf5m0zDRA&_nc_ss=7a32e&oh=00_AfzvB6zh2a1Qdq0PVDUTfLmrtGtPeWifK7eg2FoRFrY0XQ&oe=69CF463E", span: "col-span-1 row-span-2" },
  { src: "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/583371000_17884895280403936_442387006679055915_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzc2NTM0NjMxOTUyMzc0MTA0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=9Oto4c5VePIQ7kNvwGLmoXq&_nc_oc=AdoPQGNmm-4O9o75hwDXJiK3BuTekKzcNS6bAfKv-Plg5j6LFtbwY2nFsivZ8U4ortA&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=J3ZZNx60hVFqVnf5m0zDRA&_nc_ss=7a32e&oh=00_AfxDQgYQUZ1AeFI10gitZm6CpzO_PseQHu-1oeWDxoBloA&oe=69CF46FA", span: "col-span-1 row-span-1" },
  { src: "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/568639295_17882467488403936_8317937077730032465_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzc0OTE0NTIxOTcyNDYwMDgzNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=EULTnj1qJnwQ7kNvwF7Hpi4&_nc_oc=Adq2GnGGuknt6Xs9WsyZZmdmGkSU8GtCpHZVy9HCNQtU96l5pc_nn8liVKtlTanRJmY&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=R-MTYGUXs9M6SLHENR2tPw&_nc_ss=7a32e&oh=00_Afxm_xUub3y20bxXc7EjE98oj1ntiz1D_w38tHgMFgmDCA&oe=69CF3F05", span: "col-span-1 row-span-1" },
  { src: "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/542242589_17877573501403936_7764196778752231063_n.webp?_nc_cat=105&ig_cache_key=MzcxODE5NDczODI1NzAyMzYyOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=gpAGVpjIgukQ7kNvwF4VX2G&_nc_oc=Ado7tP3-vgkepLHoLjCXFNxB3LLhrU1lqc_VjzUaJtNaD1Y3PHq86N-ZqO0_tyo6Odg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=R-MTYGUXs9M6SLHENR2tPw&_nc_ss=7a32e&oh=00_AfzUvwO9TBXt5nSlQnxOlAvWx9mt7D3iHTEXyUHVf69oug&oe=69CF4CFF", span: "col-span-2 row-span-1" },
  { src: "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.75761-15/482991700_17853329370403936_2022953066236289783_n.webp?_nc_cat=102&ig_cache_key=MzU4MzkyNDQ2NDYxNjQwMDM5MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=86sFZg3Kj8kQ7kNvwH6d7RT&_nc_oc=Ado4XURuKJlXMSBgXmz1hOGtu9HraRSPmyJvCvfy9G65SZpLTQL0XMxRq-fZkwEFnvw&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=2U_omgSWOhPXlE0BRIiuhw&_nc_ss=7a32e&oh=00_Afycbpcwx78e0idLz3S4-NC2J9lvTad5LfemTgUQUT-15g&oe=69CF3322", span: "col-span-2 row-span-1" },
  { src: "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.75761-15/476273223_17847445086403936_2285344179047505877_n.webp?_nc_cat=108&ig_cache_key=MzU2MDg2MDI2NTU0Nzk3NDkwOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA3OS5zZHIuQzMifQ%3D%3D&_nc_ohc=PKyP9n_1Tp0Q7kNvwE_1zl9&_nc_oc=Adq4ISZtw7GH9VhDmt098C0LxkCNZj908WedTlBFTPDdeKv1HMUluwITFrEgoJFsdKo&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=3j5UGq_QB4GUTbMAfVW2Qg&_nc_ss=7a32e&oh=00_AfyaUu2EbG4bHwIWL-tVoI8Ljgx-lfbMEGZrWhej1axbzQ&oe=69CF2DA0", span: "col-span-1 row-span-2" },
  { src: "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.71878-15/475591873_1563308437712124_2028558297946698717_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ig_cache_key=MzU1NzkzODMzNzM4MDI2NTQ4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM4LnNkci5DMyJ9&_nc_ohc=yrL42sXZxjcQ7kNvwF3NTeR&_nc_oc=AdovOPJTKxNyh27oONiXJqsy0dpwIFTs_OIKif60PZ-o-WPpnPzL-RohIKqU822B88Y&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=3j5UGq_QB4GUTbMAfVW2Qg&_nc_ss=7a32e&oh=00_Afyb-v7MshbdLRHuCgpoyG1TXIbWGE2gU-r1QxZM_Ykakg&oe=69CF3EE0", span: "col-span-1 row-span-1" },
  { src: "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.75761-15/474917421_17845722840403936_2770053863215741295_n.webp?_nc_cat=100&ig_cache_key=MzU1NDU5OTQ3OTk1OTU0ODIyMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=hyv9AH-gJb8Q7kNvwFwsYW6&_nc_oc=AdpR_jZMollcDR0dqCz-p64e_dZ7uFNXQY7ymhs8aVF86vPKTN6flHS1VWHYLm6bFbc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=3j5UGq_QB4GUTbMAfVW2Qg&_nc_ss=7a32e&oh=00_AfwKH7N54Ya9W_mWMzk9KekwgJEGHN_H1-C60PBDEf5Syw&oe=69CF5178", span: "col-span-1 row-span-1" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Our <span className="text-brand-gray">Work</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg md:text-xl font-light"
            >
              A showcase of our recent siding installations and exterior remodeling projects.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((img, index) => (
            <TiltCard key={index} className={`relative group overflow-hidden rounded-2xl ${img.span}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="w-full h-full relative"
              >
                <img
                  src={img.src}
                  alt={`Project ${index + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium tracking-wider uppercase text-sm border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">
                    View Project
                  </span>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

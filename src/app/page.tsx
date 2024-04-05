import * as React from "react";
import NavigationMenuDemo from "@/components/ui/homepage/navbar-homepage";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faGavel,
  faShieldAlt,
  faBalanceScale,
  faShoppingBasket,
  faPersonCane,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker";

interface CategoryCardProps {
  title: string;
  rating: string;
  skills: string;
  iconName: string;
  path: string;
}
const clientCategories = [
  "Trabalhadores Rurais",
  "Trabalhadores Urbanos",
  "Empregados CLT",
  "Pessoas Jurídicas (PJ)",
  "Prestadores de Serviço",
  "Construtoras",
  "Mercado Financeiro",
  "Mercado Imobiliário",
  "Empreendedores Individuais",
  "Startups e Empresas de Tecnologia",
  "Instituições Educacionais",
  "Organizações Não Governamentais",
  "Profissionais da Saúde",
  "Estudantes Universitários",
  "Aposentados",
  "Empresas de Logística e Transporte",
  "Setor de Alimentos e Bebidas",
  "Indústria de Manufatura",
  "Empresas de Comércio Varejista",
  "Setor de Entretenimento e Lazer",
  "Empresas de Consultoria",
  "Agências de Publicidade e Marketing",
  "Setor de Energia e Recursos Naturais",
  "Indústria Farmacêutica",
  "Setor de Seguros",
  "Agências de Viagens e Turismo",
  "Profissionais Liberais",
  "Artistas e Criativos",
  "Setor de Telecomunicações",
];

const lawyerSpecialties = [
  "Advogado Previdenciário",
  "Advogado Empresarial",
  "Advogado Criminalista",
  "Assessoria Jurídica",
  "Advogado Agrário",
  "Advogado Penal",
  "Advogado Civil",
  "Advogado Ambiental",
  "Advogado de Família",
  "Advogado Tributário",
  "Advogado Trabalhista",
  "Advogado de Imigração",
  "Advogado de Propriedade Intelectual",
  "Advogado de Direitos Autorais",
  "Advogado de Internet",
  "Advogado de Telecomunicações",
  "Advogado de Direito Marítimo",
  "Advogado de Direito Aeronáutico",
  "Advogado de Direito do Consumidor",
  "Advogado de Direito Esportivo",
  "Advogado de Direito Médico",
  "Advogado de Direito da Moda",
  "Advogado de Direito Educacional",
  "Advogado de Direito Internacional",
  "Advogado de Direito Minerário",
  "Advogado de Direito Eleitoral",
  "Advogado de Seguros",
  "Advogado de Startups",
  "Advogado de Direito Digital",
  "Advogado de Direito Financeiro",
  "Advogado de Direito Público",
];

const brazilianStates = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

function generateCarouselItemData() {
  const randomBrazilianState = () =>
    faker.helpers.arrayElement(brazilianStates);
  const randomLawyerSpecialty = () =>
    faker.helpers.arrayElement(lawyerSpecialties);
  const randomClientCategory = () =>
    faker.helpers.arrayElement(clientCategories);

  const fakeLawyerSpecialty = randomLawyerSpecialty();
  const fakeClientCategory = randomClientCategory();
  const fakeState = randomBrazilianState();
  const fakeAvatarUrl = faker.image.avatarLegacy();
  const fakeName = faker.person.fullName();
  const fakeNumber = faker.number.int({ max: 100 });
  const fakeGrade = faker.number.float({ min: 3, max: 5, multipleOf: 0.01 });
  const fakeNumberProjects = faker.number.int({ max: 100 });

  // Return an object containing all the generated data
  return {
    fakeLawyerSpecialty,
    fakeClientCategory,
    fakeState,
    fakeAvatarUrl,
    fakeName,
    fakeNumber,
    fakeGrade,
    fakeNumberProjects,
  };
}

const categories = [
  {
    title: "Direito do Consumidor",
    rating: "★ 4.9/5",
    skills: "1,853 projetos",
    iconName: "consumption",
    path: "/find-lawyers/consumption",
  },
  {
    title: "Civil",
    rating: "★ 4.9/5",
    skills: "968 projetos",
    iconName: "civil",
    path: "/find-lawyers/civil",
  },
  {
    title: "Previdência",
    rating: "★ 4.8/5",
    skills: "392 projetos",
    iconName: "socialsecurity",
    path: "/find-lawyers/social-security",
  },
  {
    title: "Criminal",
    rating: "★ 4.9/5",
    skills: "1,853 projetos",
    iconName: "criminal",
    path: "/find-lawyers/criminal",
  },
  {
    title: "Trânsito",
    rating: "★ 4.9/5",
    skills: "968 projetos",
    iconName: "traffic",
    path: "/find-lawyers/traffic",
  },
  {
    title: "Assessoria Jurídica",
    rating: "★ 4.8/5",
    skills: "392 projetos",
    iconName: "legaladvice",
    path: "/find-lawyers/legal-advice",
  },
];

export default function MyHomePage() {
  const numberOfItems = 50;
  const carouselItemsData = [];

  for (let i = 0; i < numberOfItems; i++) {
    carouselItemsData.push(generateCarouselItemData());
  }
  return (
    <div className="bg-white-50 min-h-screen">
      <div className="flex justify-center py-4">
        <NavigationMenuDemo />
      </div>
      <div className="container mx-auto px-16 py-16">
        <section id="slug-hero" className="text-start">
          <h1 className="text-4xl font-bold text-black-800 mb-3">
            Assegure dos seus direitos com <br /> especialistas da área
          </h1>
          <p className="mb-4">
            Procure por um especialista de graça e começe a trabalhar quando
            quiser.
          </p>
          <Link
            href="/register"
            className="inline-block bg-black text-white font-bold uppercase text-sm mt-1 px-6 py-3 rounded-full shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Começar
          </Link>
        </section>
        <section className="mt-8">
          <div className="bg-white p-3 shadow rounded-md flex items-center">
            <h2 className="text-lg font-semibold text-black-800 mr-4">
              Avaliação dos Clientes
            </h2>
            <div className="text-black-600 text-md mr-2">★★★★★ 4.9/5</div>
            <p className="text-gray-500 text-sm ">3,5k+ avaliações</p>
          </div>
        </section>
        <section id="slug-hero2" className="text-start mt-8">
          <h2 className="text-2xl font-bold text-black-500 mb-3">
            Atendemos todos os casos,
            <br /> dos mais simples até os mais complexos
          </h2>
        </section>
        <section className="mt-8">
          <div className="grid md:grid-cols-1 gap-4 gap-y-2 lg:grid-cols-2">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                rating={category.rating}
                skills={category.skills}
                iconName={category.iconName}
                path={category.path}
              />
            ))}
          </div>
        </section>
        <section id="slug-hero3" className="text-start mt-16">
          <h2 className="text-2xl font-bold text-black-600 mb-3">
            Trabalhe com qualquer pessoa. Em qualquer lugar!
          </h2>
        </section>
        <section id="slug-hero4" className="text-start mt-16">
          <Carousel>
            <CarouselContent className="-ml-4">
              {carouselItemsData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/4 pl-3"
                >
                  <Card>
                    <CardHeader className="flex justify-end items-end">
                      <CardDescription>R${item.fakeNumber}/hr</CardDescription>
                    </CardHeader>
                    <CardHeader className="flex justify-center items-center">
                      <Avatar className="w-32 h-32 flex justify-center items-center overflow-hidden rounded-full bg-gray-100">
                        <AvatarImage
                          className="w-full h-full object-cover"
                          src={item.fakeAvatarUrl}
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <CardTitle className="pt-4">{item.fakeName}</CardTitle>
                      <CardDescription>
                        {item.fakeLawyerSpecialty}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center items-center">
                      ★ {item.fakeGrade}/5 ({item.fakeNumberProjects})
                    </CardContent>
                    <CardContent className="flex flex-col justify-center items-center">
                      <Badge className="mb-2" variant="secondary">
                        {item.fakeState}
                      </Badge>
                      <Badge variant="secondary">
                        {item.fakeClientCategory}
                      </Badge>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button>Saiba mais</Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </div>
    </div>
  );
}

function CategoryCard({
  title,
  rating,
  skills,
  iconName,
  path,
}: CategoryCardProps) {
  // Map icon names to FontAwesomeIcon icons
  const icons: { [key: string]: IconDefinition } = {
    consumption: faShoppingBasket,
    civil: faGavel,
    traffic: faCar,
    socialsecurity: faPersonCane,
    criminal: faShieldAlt,
    legaladvice: faBalanceScale,

    // Add other icon mappings here
  };

  const icon = icons[iconName];

  return (
    <Link href={path} passHref>
      <div className="flex items-center justify-between bg-gray-50 p-4 shadow rounded-md cursor-pointer hover:bg-gray-300 hover:shadow-lg transition duration-300">
        <div>
          <h3 className="text-lg font-semibold text-black">{title}</h3>
          <div className="text-black">{rating}</div>
          <div className="text-gray-600">{skills}</div>
        </div>
        <div className="w-16 h-16 flex items-center justify-center">
          {icon && <FontAwesomeIcon icon={icon} />} {/* Render the icon here */}
        </div>
      </div>
    </Link>
  );
}

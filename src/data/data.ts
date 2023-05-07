export type ExperienceData = {
    titleSm: string,
    titleLg: string,
    timePeriod: string,
    description: string,
    list?: string[],
    image: string,
    imageAlt: string,
    link: string,
}

export const myExperience: ExperienceData[] = [{
    titleSm: "Desenvolvedor",
    titleLg: "JavaScript Full Stack",
    timePeriod: "Soil Tecnologia para Irrigação | 2019 - 2022",
    description: "Implementação de sistema de acionamento/coleta de dados em campo, completo com dashboard em ReactJS. Arquitetura mista para disponibilização de uso via rede local ou à distancia.",
    list: [
        "Servidor local em NodeJS comunicando com dispositivos em campo via TCP/IP",
        "Replicação dos dados locais para nuvem via AWS IoT Core",
        "Recepção de comandos à distancia utilizando AWS IoT Core",
        "Dashboard ReactJS para visualização dos dados",
    ],
    image: "/images/soil.jpg",
    imageAlt: "Soil Tecnologia",
    link: "/",
},
{
    titleSm: "Desenvolvedor",
    titleLg: "Firmware ESP32",
    timePeriod: "Ausyx | 2022 - 2023",
    description: "Implementação de diversos sistemas embarcados baseados em ESP32 para sensoriamento, acionamento, e coleta de dados.",
    list: [
        "Sensoriamento remoto em comunicação WiFi com central",
        "Acionamento baseado nos dados coletados",
        "Desenvolvimento de Interface de Usuário",
        "Coleta de dados on-premises utilizando SPIFFS",
    ],
    image: "/images/ausyx.jpeg",
    imageAlt: "Ausyx",
    link: "/",
},

] 
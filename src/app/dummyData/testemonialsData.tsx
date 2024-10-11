type testemonialsDataItem = {
    id: number;
    image: string;
    name: string;
    occupation: string;
    testemonial: string;
}

export const testemonialsData: testemonialsDataItem[] = [
    {
        id: 1,
        image: '/assets/testemonial1.png',
        name: 'Jill Alison',
        occupation: 'Student',
        testemonial: 'Learning French at Dalia Language School has been amazing! The teachers are so patient, and I love the friendly environment.',
    },
    {
        id: 2,
        image: '/assets/testimonial2.png',
        name: 'Sofia Ramirez',
        occupation: 'Freelance Writer',
        testemonial: 'I never thought learning Spanish could be this much fun. Dalia Language School makes every lesson enjoyable and interactive!',
    },
    {
        id: 3,
        image: '/assets/testimonial3.png',
        name: 'Michael Thompson',
        occupation: 'Graphic Designer',
        testemonial: 'The English classes at Dalia really helped me feel more confident in my job. The teachers are wonderful and super supportive.',
    },
    {
        id: 4,
        image: '/assets/testimonial4.png',
        name: 'Julia Tompson',
        occupation: 'Software Engineer',
        testemonial: 'I love how flexible the classes are at Dalia. It fits perfectly with my busy schedule, and I’m learning so much every week.',
    },
];


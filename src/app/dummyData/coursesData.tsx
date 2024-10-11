type coursesDataItem= {
    id: number;
    image: string;
    subtitle: string;
    title: string;
    description: string;
}

export const coursesData: coursesDataItem[] = [
    {
        id: 1,
        image: '/assets/courses/france.jpg',
        subtitle: 'Beginner courses',
        title: 'French Language',
        description: 'Start learning French with easy lessons that focus on conversation and grammar. Immerse yourself in French culture while building your language skills!',
    },
    {
        id: 2,
        image: '/assets/courses/spanish.jpg',
        subtitle: 'Courses',
        title: 'Spanish Language',
        description: 'Dive into Spanish with practical phrases and useful vocabulary, perfect for travel or everyday situations. Build confidence while speaking!',
    },
    {
        id: 3,
        image: '/assets/courses/business.jpg',
        subtitle: 'Courses',
        title: 'Weekend Courses',
        description: 'Boost your business communication skills with flexible weekend classes. Ideal for busy professionals looking to advance their careers!',
    },
    {
        id: 4,
        image: '/assets/courses/children.jpg',
        subtitle: 'Beginner courses',
        title: 'Children Courses',
        description: 'Fun and interactive language lessons designed for kids, making learning a new language both enjoyable and exciting for young learners!',
    },
    {
        id: 5,
        image: '/assets/courses/class.jpg',
        subtitle: 'Courses',
        title: 'Intermediate',
        description: 'Advance your language skills with engaging lessons on grammar and conversation. Perfect for those ready to take the next step!',
    },
    {
        id: 6,
        image: '/assets/courses/londonFlag1.jpg',
        subtitle: 'Courses',
        title: 'English Language',
        description: 'Improve your English with fun, structured lessons that cover grammar, vocabulary, and everyday communication. Great for work or travel!',
    },
];

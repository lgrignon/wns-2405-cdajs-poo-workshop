

class Student {
    private static counter: number = 0;

    private id: number = ++Student.counter;

    firstname: string;
    private name: string;
    private birthday: Date;
    private address: string;

    constructor(firstname: string,
        name: string,
        birthday: Date,
        address: string) {
        this.firstname = firstname;
        this.name = name;
        this.birthday = birthday;
        this.address = address;
    }

    getFirstname(): string {
        return this.firstname;
    }

    getLastname(): string {
        return this.name;
    }

    getBirthday(): Date {
        return this.birthday;
    }

    getAddress(): string {
        return this.address;
    }
}

class Language {
    private static counter: number = 0;

    private id: number = ++Language.counter;

    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

class School {
    private static counter: number = 0;

    private id: number = ++School.counter;

    private city: string;
    private capacity: number;
    private taughtLanguages: Language[];
    private students: Student[] = [];

    constructor(city: string, capacity: number, taughtLanguages: Language[] = []) {
        this.city = city;
        this.capacity = capacity;
        this.taughtLanguages = taughtLanguages;
    }

    getCity(): string {
        return this.city;
    }


    getCapacity(): number {
        return this.capacity;
    }

    getTaughtLanguage(): ReadonlyArray<Language> {
        return this.taughtLanguages;
    }

    addLanguages(languages: Language[]) {
        this.taughtLanguages.push(...languages);
    }
    
    removeLanguage(language: Language) {
        // suppression
        // for each teacher, notify language deleted
    }

    addStudent(student: Student) {
        this.students.push(student);
    }
    
    removeStudent(student: Student) {
        // suppression
        // for each teacher, notify language deleted
    }
}

//const s: School;

const languageC: Language = new Language("C"); 
const languageCpp: Language = new Language("C++"); 
const languageJava: Language = new Language("Java"); 
const languageTS: Language = new Language("Typescript"); 
const languageJS: Language = new Language("Javascript"); 

const student = new Student("Louis", "Grignon", new Date(), "my address");

const student2 = new Student("Alex", "Kandel", new Date(), "alex address");

const school = new School("Marseille", 10);
school.addStudent(student);
school.addStudent(student2);

school.addLanguages([languageC, languageJava, languageTS]);


const school2 = new School("Toulouse", 20);
school2.addStudent(student2);
school2.addLanguages([languageCpp]);

student2.firstname = "fdskjfksjfkjk";


console.log("lancement, ", school, school2);
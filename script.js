document.addEventListener('DOMContentLoaded', () => {
    const mallaCurricularDiv = document.getElementById('malla-curricular');

    const semesters = [
        {
            name: "Semestre 1",
            courses: [
                { id: "MAT1031", name: "MAT 1031 - Álgebra Lineal", prerequisites: [] }, [cite: 2]
                { id: "MAT1101", name: "MAT 1101 - Cálculo I - Diferencial", prerequisites: [] }, [cite: 2]
                { id: "IST0010", name: "IST 0010 - Introducción a la Ingeniería de Sistemas", prerequisites: [] }, [cite: 2]
                { id: "IST2088", name: "IST 2088 - Algoritmia y Programación I", prerequisites: [] }, [cite: 2]
                { id: "CAS3020", name: "CAS 3020 - Competencias Comunicativas I", prerequisites: [] } [cite: 2]
            ]
        },
        {
            name: "Semestre 2",
            courses: [
                { id: "MAT1111", name: "MAT 1111 - Cálculo II - Integral", prerequisites: ["MAT1101"] }, [cite: 7]
                { id: "FIS1043", name: "FIS 1043 - Física Mecánica", prerequisites: ["MAT1101"] }, [cite: 9]
                { id: "IST2089", name: "IST 2089 - Algoritmia y Programación II", prerequisites: ["IST2088"] }, [cite: 11]
                { id: "CAS3030", name: "CAS 3030 - Competencias Comunicativas II", prerequisites: ["CAS3020"] }, [cite: 13]
                { id: "ELG1140", name: "ELG 1140 - Electiva en Historia", prerequisites: [] } [cite: 15]
            ]
        },
        {
            name: "Semestre 3",
            courses: [
                { id: "MAT1121", name: "MAT 1121 - Cálculo III - Vectorial", prerequisites: ["MAT1111"] }, [cite: 17]
                { id: "FIS1045", name: "FIS 1045 - Física Calor-Ondas", prerequisites: ["FIS1023"] }, [cite: 17] // Note: FIS1023 not in provided text, assuming it's a typo or implied prerequisite
                { id: "IST2101", name: "IST 2101 - Programación Orientada a Objetos", prerequisites: ["IST2089"] }, [cite: 17]
                { id: "IST4031", name: "IST 4031 - Estructura de Datos I", prerequisites: ["IST2089"] }, [cite: 17]
                { id: "ELG1130", name: "ELG 1130 - Electiva en Humanidades", prerequisites: [] } [cite: 19]
            ]
        },
        {
            name: "Semestre 4",
            courses: [
                { id: "MAT4011", name: "MAT 4011 - Ecuaciones Diferenciales", prerequisites: ["MAT1111"] }, [cite: 28]
                { id: "FIS1043_sem4", name: "FIS 1043 - Física Electricidad", prerequisites: ["FIS1023", "MAT1111"] }, [cite: 29] // Note: FIS1023 not in provided text, assuming it's a typo or implied prerequisite
                { id: "ELG1150", name: "ELG 1150 - Electiva en Ciencias de la Vida", prerequisites: [] }, [cite: 30]
                { id: "IST4032", name: "IST 4031 Estructura de Datos II", prerequisites: ["IST4021"] }, [cite: 31] // Note: IST4021 not in provided text, assuming it's a typo or implied prerequisite, also conflicting ID with IST4031 in Sem 3
                { id: "MAT4021", name: "MAT 4021 - Matemáticas Discretas", prerequisites: [] } [cite: 32]
            ]
        },
        {
            name: "Semestre 5",
            courses: [
                { id: "EST7042", name: "EST 7042 - Análisis de Datos en Ing I", prerequisites: ["MAT1111"] }, [cite: 37]
                { id: "IST4310", name: "IST 4310 - Algoritmia y Complejidad", prerequisites: ["IST4031"] }, [cite: 39]
                { id: "IST7072", name: "IST 7072 - Diseño Digital", prerequisites: ["MAT4021"] }, [cite: 41]
                { id: "ELG0007", name: "ELG 0007 - Electiva en Ciencias Básicas", prerequisites: [] }, [cite: 43]
                { id: "IST4330", name: "IST 4330 - Estructuras Discretas", prerequisites: ["MAT4021", "IST4031"] } [cite: 45]
            ]
        },
        {
            name: "Semestre 6",
            courses: [
                { id: "IST4360", name: "IST 4360 - Soluciones Computacionales a Problemas de Ingeniería", prerequisites: ["MAT4011"] }, [cite: 54]
                { id: "IST7111", name: "IST 7111 - Bases de Datos", prerequisites: ["IST4310"] }, [cite: 55]
                { id: "IST7191", name: "IST 7191 - Redes de Computación", prerequisites: [] }, [cite: 56]
                { id: "IST4012", name: "IST 4012 - Estructura del Computador I", prerequisites: ["IST7072"] }, [cite: 57]
                { id: "ELG0008", name: "ELG 0008 - Electiva Básica Profesional", prerequisites: [] } [cite: 58]
            ]
        },
        {
            name: "Semestre 7",
            courses: [
                { id: "IST7420", name: "IST 7420 - Optimización", prerequisites: ["IST4360", "EST7042"] }, [cite: 65]
                { id: "IST7121", name: "IST 7121 - Diseño de Software I", prerequisites: ["IST7111"] }, [cite: 66]
                { id: "IST70811", name: "IST 70811 - Sistemas Operativos", prerequisites: ["IST4031", "IST4012"] }, [cite: 67]
                { id: "IST7102", name: "IST 7102 - Estructura del Computador II", prerequisites: ["IST4012"] }, [cite: 68]
                { id: "ELG1170", name: "ELG 1170 - Electiva en Ética", prerequisites: [] } [cite: 71]
            ]
        },
        {
            name: "Semestre 8",
            courses: [
                { id: "IST7122", name: "IST 7122 - Diseño de Software II", prerequisites: ["IST7121"] }, [cite: 72]
                { id: "IST1302", name: "IST 1302 - Electiva en Redes", prerequisites: ["IST7191S"] }, [cite: 72] // Note: IST7191S not in provided text, assuming it's a typo or implied prerequisite
                { id: "IST7410", name: "IST 7410 - Compiladores", prerequisites: ["IST2110", "IST4031"] }, [cite: 72] // Note: IST2110 not in provided text, assuming it's a typo or implied prerequisite
                { id: "ELG1301", name: "ELG 1301 - Electiva Profesional II", prerequisites: [] }, [cite: 73]
                { id: "ELG1190", name: "ELG 1190 - Electiva en Ciencias Sociales", prerequisites: [] }, [cite: 74]
                { id: "ELG8400", name: "ELG 8400 - Electiva en innovación, Dilo. y Sociedad", prerequisites: [] } [cite: 75]
            ]
        },
        {
            name: "Semestre 9",
            courses: [
                { id: "ELG1306_a", name: "ELG 1306 - Electiva Profesional III", prerequisites: [] }, [cite: 80]
                { id: "ELG1303", name: "ELG 1303 - Electiva en Ciencias de la Computación", prerequisites: [] }, [cite: 82]
                { id: "ELP4030", name: "ELP 4030 - Electiva Formación Complementaria I", prerequisites: [] }, [cite: 84]
                { id: "ELG1160", name: "ELG 1160 - Electiva en Filosofía", prerequisites: [] }, [cite: 87]
                { id: "ELG1304", name: "ELG 1304 - Electiva Gestión Informática", prerequisites: [] }, [cite: 88]
                { id: "IIN4310_b", name: "IIN 4310 - Examen Comprensivo II", prerequisites: [] } // Moved here as per text
            ]
        },
        {
            name: "Semestre 10",
            courses: [
                { id: "IST4380", name: "IST 4380 - Seminario de Carrera II", prerequisites: ["IST4370"] }, [cite: 93]
                { id: "INV7363", name: "INV 7363 - Proyecto Final", prerequisites: ["IST7122"] }, [cite: 95]
                { id: "ELG1180", name: "ELG 1180 - Electiva en Estudios del Caribe", prerequisites: [] }, [cite: 97]
                { id: "ELG1306_b", name: "ELG 1306 Electiva Profesional III", prerequisites: [] } [cite: 99]
            ]
        }
    ];

    const specialCourses = [
        { id: "IIN4310_a", name: "IIN 4310 - Examen Comprensivo I", semester: 5, prerequisites: ["MAT4011", "MAT1121", "FIS1023", "FIS1033", "FIS1043"] }, [cite: 103] // Note: FIS1023, FIS1033 not in provided text, assuming they are general physics courses
        { id: "IST4370", name: "IST 4370 - Seminario de Carrera I", semester: 5, prerequisites: [] }, [cite: 104]
        // IIN 4310 - Examen Comprensivo II is moved to Semestre 9 in the main array.
        // IST 4380 and INV 7363 are in Semestre 10 in the main array.
    ];

    let approvedCourses = JSON.parse(localStorage.getItem('approvedCourses')) || [];

    function renderMalla() {
        mallaCurricularDiv.innerHTML = ''; // Clear previous content

        semesters.forEach(semestre => {
            const semestreDiv = document.createElement('div');
            semestreDiv.classList.add('semestre');
            semestreDiv.innerHTML = `<h2>${semestre.name}</h2>`;

            semestre.courses.forEach(course => {
                const materiaDiv = document.createElement('div');
                materiaDiv.classList.add('materia');
                materiaDiv.setAttribute('data-course-id', course.id);

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = course.id;
                checkbox.checked = approvedCourses.includes(course.id);
                checkbox.disabled = !canTakeCourse(course); // Disable if prerequisites not met

                const label = document.createElement('label');
                label.htmlFor = course.id;
                label.textContent = course.name;

                materiaDiv.appendChild(checkbox);
                materiaDiv.appendChild(label);
                semestreDiv.appendChild(materiaDiv);

                if (checkbox.checked) {
                    materiaDiv.classList.add('aprobada');
                } else if (checkbox.disabled) {
                    materiaDiv.classList.add('bloqueada');
                }

                checkbox.addEventListener('change', (event) => {
                    if (event.target.checked) {
                        approvedCourses.push(course.id);
                        materiaDiv.classList.add('aprobada');
                    } else {
                        approvedCourses = approvedCourses.filter(id => id !== course.id);
                        materiaDiv.classList.remove('aprobada');
                    }
                    localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
                    renderMalla(); // Re-render to update unlocked courses
                });
            });
            mallaCurricularDiv.appendChild(semestreDiv);
        });

        // Render special courses (like comprehensive exams)
        // You might want a separate section for these or integrate them into their respective semesters
        // For simplicity, let's just make sure their prerequisite logic is handled.
        // Example: IIN 4310 - Examen Comprensivo I (Semestre 5)
        const semestre5Div = document.querySelector('.semestre:nth-child(5)'); // Assuming 5th child is Semestre 5
        if (semestre5Div) {
            specialCourses.filter(sc => sc.semester === 5).forEach(sc => {
                const materiaDiv = document.createElement('div');
                materiaDiv.classList.add('materia');
                materiaDiv.setAttribute('data-course-id', sc.id);

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = sc.id;
                checkbox.checked = approvedCourses.includes(sc.id);
                checkbox.disabled = !canTakeCourse(sc);

                const label = document.createElement('label');
                label.htmlFor = sc.id;
                label.textContent = sc.name;

                materiaDiv.appendChild(checkbox);
                materiaDiv.appendChild(label);
                semestre5Div.appendChild(materiaDiv);

                if (checkbox.checked) {
                    materiaDiv.classList.add('aprobada');
                } else if (checkbox.disabled) {
                    materiaDiv.classList.add('bloqueada');
                }

                checkbox.addEventListener('change', (event) => {
                    if (event.target.checked) {
                        approvedCourses.push(sc.id);
                        materiaDiv.classList.add('aprobada');
                    } else {
                        approvedCourses = approvedCourses.filter(id => id !== sc.id);
                        materiaDiv.classList.remove('aprobada');
                    }
                    localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
                    renderMalla();
                });
            });
        }
    }

    function canTakeCourse(course) {
        return course.prerequisites.every(prereq => approvedCourses.includes(prereq));
    }

    renderMalla();
});

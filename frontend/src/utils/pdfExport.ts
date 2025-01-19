import jsPDF from 'jspdf';
import { Resume } from '@/types/Resume';

export const exportToPDF = (resume: Resume) => {
  const doc = new jsPDF();

  doc.setFont('helvetica', 'normal');

  // Add Basics
  doc.text(`Name: ${resume.basics.name}`, 10, 10);
  doc.text(`Email: ${resume.basics.email}`, 10, 20);
  doc.text(`Phone: ${resume.basics.phone}`, 10, 30);
  if (resume.basics.summary) doc.text(`Summary: ${resume.basics.summary}`, 10, 40);

  // Add Work Experience
  let yPosition = 50;
  doc.text('Work Experience:', 10, yPosition);
  yPosition += 10;
  resume.work.forEach((job, index) => {
    doc.text(`${index + 1}. ${job.position} at ${job.company}`, 10, yPosition);
    yPosition += 10;
    doc.text(`   ${job.startDate} - ${job.endDate || 'Present'}`, 10, yPosition);
    yPosition += 10;
    if (job.summary) {
      doc.text(`   ${job.summary}`, 10, yPosition);
      yPosition += 10;
    }
  });

  // Add Education
  yPosition += 10;
  doc.text('Education:', 10, yPosition);
  yPosition += 10;
  resume.education.forEach((edu, index) => {
    doc.text(`${index + 1}. ${edu.studyType} in ${edu.area}`, 10, yPosition);
    yPosition += 10;
    doc.text(`   ${edu.institution}`, 10, yPosition);
    yPosition += 10;
    doc.text(`   ${edu.startDate} - ${edu.endDate || 'Present'}`, 10, yPosition);
    yPosition += 10;
  });

  // Add Skills
  yPosition += 10;
  if (resume.skills && resume.skills.length > 0) {
    doc.text('Skills:', 10, yPosition);
    yPosition += 10;
    resume.skills.forEach((skill, index) => {
      doc.text(`${index + 1}. ${skill.name} - ${skill.level || 'N/A'}`, 10, yPosition);
      yPosition += 10;
    });
  }

  // Save the PDF
  doc.save(`${resume.basics.name}_Resume.pdf`);
};

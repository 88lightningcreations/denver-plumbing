import fs from 'fs';
import path from 'path';
import { supabase } from './supabaseClient';

const servicesFilePath = path.join(process.cwd(), 'lib', 'services.json');
const blogsFilePath = path.join(process.cwd(), 'lib', 'blogs.json');

export async function getServices() {
  const { data, error } = await supabase.from('services').select('*');

  if (error || !data) {
    console.error('Error fetching services from Supabase:', error);
    const fileContent = fs.readFileSync(servicesFilePath, 'utf8');
    return JSON.parse(fileContent);
  } else {
    return data;
  }
}

export async function getService(id: string) {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    console.error(`Error fetching service with id ${id} from Supabase:`, error);
    const services = await getServices();
    return services.find((service) => service.id === id);
  } else {
    return data;
  }
}

export async function getBlogs() {
  const { data, error } = await supabase.from('blogs').select('*');

  if (error || !data) {
    console.error('Error fetching blogs from Supabase:', error);
    const fileContent = fs.readFileSync(blogsFilePath, 'utf8');
    return JSON.parse(fileContent);
  } else {
    return data;
  }
}

export async function getBlog(id: string) {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    console.error(`Error fetching blog with id ${id} from Supabase:`, error);
    const blogs = await getBlogs();
    return blogs.find((blog) => blog.id === id);
  } else {
    return data;
  }
}

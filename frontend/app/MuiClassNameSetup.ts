import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material'

ClassNameGenerator.configure((componentName) => componentName.replace('Mui', ''))

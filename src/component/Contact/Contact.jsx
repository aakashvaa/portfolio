import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mail, MessageSquare, Pencil } from 'lucide-react'
import emailjs from '@emailjs/browser'
function App() {
    const formRef = useRef(null)
    const [focused, setFocused] = useState('')
    const [formState, setFormState] = useState({
        email: '',
        subject: '',
        message: '',
    })
    const [isHovered, setIsHovered] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formRef.current) return

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log('Email sent successfully!', result.text)
                },
                (error) => {
                    console.error('Error sending email:', error)
                }
            )

        formRef.current.reset()
    }

    return (
        <div
            id="contact"
            className="font-abel relative w-[80%] p-3 gap-11 pt-28 justify-center items-center flex flex-col mx-auto"
        >
            <h1 className=" w-full text-center text-[3em]">Contact</h1>

            <motion.div
                className="fixed inset-0 opacity-20"
                animate={{
                    background: [
                        'radial-gradient(circle at 0% 0%, #ffffff11 0%, transparent 50%)',
                        'radial-gradient(circle at 100% 100%, #ffffff11 0%, transparent 50%)',
                        'radial-gradient(circle at 0% 100%, #ffffff11 0%, transparent 50%)',
                        'radial-gradient(circle at 100% 0%, #ffffff11 0%, transparent 50%)',
                    ],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-md"
            >
                <motion.div
                    className="backdrop-blur-md bg-white/[0.02] p-8 rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.37)] relative overflow-hidden"
                    whileHover={{ boxShadow: '0 12px 40px rgba(0,0,0,0.45)' }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent pointer-events-none " />

                    <motion.div
                        initial={false}
                        animate={{
                            background: focused
                                ? 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)'
                                : 'none',
                        }}
                        className="absolute inset-0 transition-all duration-1000"
                    />

                    <div className="relative">
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-center mb-8"
                        >
                            <motion.h2
                                className="text-4xl font-bold text-white/90 tracking-tight"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                Get in Touch
                            </motion.h2>
                            <motion.p
                                className="text-white/60 mt-3 text-sm tracking-wide"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Lets connect to build something amazing together
                            </motion.p>
                        </motion.div>

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <motion.div
                                whileTap={{ scale: 0.995 }}
                                className="group relative"
                            >
                                <motion.div
                                    animate={{
                                        color:
                                            focused === 'email'
                                                ? 'rgba(255,255,255,0.9)'
                                                : 'rgba(255,255,255,0.4)',
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" />
                                </motion.div>
                                <input
                                    type="email"
                                    name="user_email"
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused('')}
                                    placeholder="Your Email"
                                    className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:border-white/20 outline-none text-white/90 placeholder-white/40 transition-all duration-200 hover:border-white/10"
                                />
                                <AnimatePresence>
                                    {focused === 'email' && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                scale: 0.95,
                                            }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="absolute inset-0 -z-10 bg-white/[0.02] rounded-xl blur-sm"
                                        />
                                    )}
                                </AnimatePresence>
                            </motion.div>
                            <motion.div
                                whileTap={{ scale: 0.995 }}
                                className="group relative"
                            >
                                <motion.div
                                    animate={{
                                        color:
                                            focused === 'email'
                                                ? 'rgba(255,255,255,0.9)'
                                                : 'rgba(255,255,255,0.4)',
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Pencil className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" />
                                </motion.div>
                                <input
                                    type="text"
                                    name="subject"
                                    onFocus={() => setFocused('subject')}
                                    onBlur={() => setFocused('')}
                                    placeholder="Subject"
                                    className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:border-white/20 outline-none text-white/90 placeholder-white/40 transition-all duration-200 hover:border-white/10"
                                />
                                <AnimatePresence>
                                    {focused === 'subject' && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                scale: 0.95,
                                            }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="absolute inset-0 -z-10 bg-white/[0.02] rounded-xl blur-sm"
                                        />
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            <motion.div
                                whileTap={{ scale: 0.995 }}
                                className="group relative"
                            >
                                <motion.div
                                    animate={{
                                        color:
                                            focused === 'message'
                                                ? 'rgba(255,255,255,0.9)'
                                                : 'rgba(255,255,255,0.4)',
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <MessageSquare className="absolute left-4 top-6 w-4 h-4" />
                                </motion.div>
                                <textarea
                                    rows={5}
                                    name="message"
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused('')}
                                    placeholder="Your Message"
                                    className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:border-white/20 outline-none text-white/90 placeholder-white/40 transition-all duration-200 resize-none hover:border-white/10"
                                />
                                <AnimatePresence>
                                    {focused === 'message' && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                scale: 0.95,
                                            }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="absolute inset-0 -z-10 bg-white/[0.02] rounded-xl blur-sm"
                                        />
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            <motion.button
                                type="submit"
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative w-full group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl blur-sm"
                                    animate={{
                                        opacity: isHovered ? 1 : 0.7,
                                    }}
                                />
                                <motion.div
                                    className="relative w-full py-4 px-6 bg-white/5 text-white/90 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200 border border-white/10 group-hover:border-white/20"
                                    whileHover={{
                                        backgroundColor:
                                            'rgba(255,255,255,0.08)',
                                    }}
                                >
                                    <motion.div
                                        animate={{
                                            x: isHovered ? [0, 5, 0] : 0,
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        <Send className="w-4 h-4" />
                                    </motion.div>
                                    <span>Send Message</span>
                                </motion.div>
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default App

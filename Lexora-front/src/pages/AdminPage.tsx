import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, type NavigateFunction } from 'react-router-dom';

type User = {
    id: string;
    name: string;
    email: string;
};

type Category = {
    id: string;
    categoryName: string;
};


type Article = {
    id: string;
    title: string;
    subTitle: string;
    content: string;
    authorName: string;
    publishedAt?: string;
}

export default function AdminPage() {
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [categories, setCategories] = useState<any[]>([]);
    const [categoryName, setCategoryName] = useState<string>('');
    const [categoryLoading, setCategoryLoading] = useState<boolean>(false);
    const [categorySaving, setCategorySaving] = useState<boolean>(false);


    // Article modal state
    const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
    const [articles, setArticles] = useState<Article[]>([]);
    const [articleLoading, setArticleLoading] = useState(false);

    const openUserModal = async () => {
        setIsUserModalOpen(true);
        setLoading(true);
        try {
            const resp = await axios.get('http://localhost:8080/api/auth/get/all/accounts');
            setUsers(resp.data.data);
        } catch (error) {
            setUsers([]);
        }
        setLoading(false);
    }

    const openCategoryModal = async () => {
        setIsCategoryModalOpen(true);
        setCategoryLoading(true);
        try {
            const resp = await axios.get('http://localhost:8080/api/v1/category/get/all/categories');
            setCategories(resp.data.data);
        } catch (error) {
            setCategories([]);
        }
        setCategoryLoading(false);
    }

    const saveCategory = async () => {
        if (!categoryName.trim()) return;
        setCategorySaving(true);
        try {
            await axios.post('http://localhost:8080/api/v1/category/add/new/category', { categoryName: categoryName });
            setCategoryName('');
            alert('Category Added Success !')
            const resp = await axios.get('http://localhost:8080/api/v1/category/get/all/categories');
            setCategories(resp.data.data);
        } catch (error) {
            console.log(error)
        }
        setCategorySaving(false);
    }

    const openArticleModal = async () => {
        setIsArticleModalOpen(true);
        setArticleLoading(true);
        try {
            const resp = await axios.get('http://localhost:8080/api/v1/articles/get/published/articles');
            setArticles(resp.data.data);
        } catch (error) {
            setArticles([]);
        }
        setArticleLoading(false);
    }

    const navigate: NavigateFunction = useNavigate()

    const logoutMethod = () => {
        localStorage.removeItem('userData')
        alert('you logout')
        navigate('/')
    }

    const deleteUser = async (userID: number) => {
        const api = `http://localhost:8080/api/auth/delete/author/account/${userID}`
        try {
            const resp = await axios.delete(api)
            alert('Deleted')
            console.log(resp)
            const reap = await axios.get('http://localhost:8080/api/auth/get/all/accounts');
            setUsers(reap.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteCateory = async (categoryID: number) => {
        const api = `http://localhost:8080/api/v1/category/delete/category=/${categoryID}`
        try {
            const resp = await axios.delete(api)
            console.log(resp)
            alert('success category delete!')
            const reap = await axios.get('http://localhost:8080/api/v1/category/get/all/categories');
            setCategories(reap.data.data);
        } catch (error) {
            console.log(error)
            alert('something went wrong')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <header className="bg-white shadow-md py-6 px-8 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">A</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">Admin Dashboard</span>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-600 font-medium">Welcome, Admin</span>
                    <button onClick={logoutMethod} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">Logout</button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-10 px-4">

                <div className="bg-white rounded-xl shadow p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <button onClick={openUserModal} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">Manage Users</button>
                        <button onClick={openArticleModal} className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">Manage Articles</button>
                        <button onClick={openCategoryModal} className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">Manage Category</button>
                    </div>
                </div>

                {/* User Modal */}
                {isUserModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                        <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 p-8 relative" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                            <button
                                onClick={() => setIsUserModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h2 className="text-xl font-bold text-gray-900 mb-6">All Users</h2>
                            {loading ? (
                                <div className="text-center py-8 text-gray-500">Loading...</div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {users.map((user, idx) => (
                                                <tr key={user.id || idx}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{user.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{user.email}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                        <button onClick={() => deleteUser(Number(user.id))} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-200">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Category Modal */}
                {isCategoryModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                        <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full mx-4 p-8 relative" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                            <button
                                onClick={() => setIsCategoryModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Manage Categories</h2>
                            <div className="mb-6 flex items-center space-x-4">
                                <input
                                    type="text"
                                    value={categoryName}
                                    onChange={e => setCategoryName(e.target.value)}
                                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter category name"
                                    disabled={categorySaving}
                                />
                                <button
                                    onClick={saveCategory}
                                    className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 w-56"
                                    disabled={categorySaving}
                                >
                                    {categorySaving ? 'Saving...' : 'Save Category'}
                                </button>
                            </div>
                            {categoryLoading ? (
                                <div className="text-center py-8 text-gray-500">Loading...</div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {categories.map((cat, idx) => (
                                                <tr key={cat.id || idx}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{cat.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{cat.categoryName}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                        <button onClick={() => deleteCateory(Number(cat.id))} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-200">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Article Modal */}
                {isArticleModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                        <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full mx-4 p-8 relative" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                            <button
                                onClick={() => setIsArticleModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h2 className="text-xl font-bold text-gray-900 mb-6">All Articles</h2>
                            {articleLoading ? (
                                <div className="text-center py-8 text-gray-500">Loading...</div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Published Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {articles.map((article, idx) => (
                                                <tr key={article.id || idx}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{article.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{article.title}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{article.authorName}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{article.publishedAt || '-'}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

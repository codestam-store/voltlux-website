import { getBuildConfig } from '@/lib/build-config';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function BuildInfoPage() {
    const config = getBuildConfig();

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="mx-auto max-w-4xl space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Build Configuration</h1>
                    <p className="text-muted-foreground text-lg">
                        This page shows the randomly selected design configuration for this build.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                Category
                                <Badge variant="secondary">Primary</Badge>
                            </CardTitle>
                            <CardDescription>
                                The main business type or purpose
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-semibold">{config.category}</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                Style
                                <Badge variant="outline">Visual</Badge>
                            </CardTitle>
                            <CardDescription>
                                The visual design approach
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-semibold">{config.style}</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                Theme
                                <Badge variant="outline">Mood</Badge>
                            </CardTitle>
                            <CardDescription>
                                The overall aesthetic mood
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-semibold">{config.theme}</p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Build Seed</CardTitle>
                        <CardDescription>
                            Use this seed to reproduce the same random selection in future builds
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Set the environment variable <code className="bg-muted px-2 py-1 rounded">BUILD_SEED</code> to this value to reproduce this exact configuration:
                            </p>
                            <div className="bg-muted p-4 rounded-lg">
                                <code className="text-sm break-all">{config.seed}</code>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Design Brief</CardTitle>
                        <CardDescription>
                            The complete design specification for this build
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            <p className="text-lg leading-relaxed">
                                This website is designed as a <strong>{config.category.toLowerCase()}</strong> with a
                                <strong> {config.style.toLowerCase()}</strong> approach and a
                                <strong> {config.theme.toLowerCase()}</strong> aesthetic. The design emphasizes
                                unique visual choices, intentional micro-interactions, and meaningful content
                                that feels handcrafted rather than template-like.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

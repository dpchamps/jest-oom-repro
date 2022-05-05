
  describe("some-evil-spec=404", () => {
    it("evil-block-404", () => {
      window.evil_404 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
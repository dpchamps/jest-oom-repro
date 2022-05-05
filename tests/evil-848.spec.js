
  describe("some-evil-spec=848", () => {
    it("evil-block-848", () => {
      window.evil_848 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  

  describe("some-evil-spec=702", () => {
    it("evil-block-702", () => {
      window.evil_702 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
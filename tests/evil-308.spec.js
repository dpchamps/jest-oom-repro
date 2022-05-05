
  describe("some-evil-spec=308", () => {
    it("evil-block-308", () => {
      window.evil_308 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
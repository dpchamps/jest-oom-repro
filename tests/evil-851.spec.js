
  describe("some-evil-spec=851", () => {
    it("evil-block-851", () => {
      window.evil_851 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
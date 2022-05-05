
  describe("some-evil-spec=147", () => {
    it("evil-block-147", () => {
      window.evil_147 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
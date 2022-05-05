
  describe("some-evil-spec=7", () => {
    it("evil-block-7", () => {
      window.evil_7 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
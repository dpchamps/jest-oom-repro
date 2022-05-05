
  describe("some-evil-spec=965", () => {
    it("evil-block-965", () => {
      window.evil_965 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
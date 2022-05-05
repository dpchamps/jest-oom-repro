
  describe("some-evil-spec=170", () => {
    it("evil-block-170", () => {
      window.evil_170 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
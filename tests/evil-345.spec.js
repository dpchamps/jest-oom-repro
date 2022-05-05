
  describe("some-evil-spec=345", () => {
    it("evil-block-345", () => {
      window.evil_345 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  

  describe("some-evil-spec=70", () => {
    it("evil-block-70", () => {
      window.evil_70 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
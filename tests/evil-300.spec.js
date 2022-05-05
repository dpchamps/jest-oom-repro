
  describe("some-evil-spec=300", () => {
    it("evil-block-300", () => {
      window.evil_300 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
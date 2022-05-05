
  describe("some-evil-spec=107", () => {
    it("evil-block-107", () => {
      window.evil_107 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
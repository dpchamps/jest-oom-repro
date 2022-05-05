
  describe("some-evil-spec=2", () => {
    it("evil-block-2", () => {
      window.evil_2 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
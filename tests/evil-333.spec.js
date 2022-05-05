
  describe("some-evil-spec=333", () => {
    it("evil-block-333", () => {
      window.evil_333 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  

  describe("some-evil-spec=902", () => {
    it("evil-block-902", () => {
      window.evil_902 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
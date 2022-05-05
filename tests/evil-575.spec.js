
  describe("some-evil-spec=575", () => {
    it("evil-block-575", () => {
      window.evil_575 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
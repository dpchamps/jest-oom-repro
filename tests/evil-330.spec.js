
  describe("some-evil-spec=330", () => {
    it("evil-block-330", () => {
      window.evil_330 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
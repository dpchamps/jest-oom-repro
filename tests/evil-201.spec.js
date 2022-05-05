
  describe("some-evil-spec=201", () => {
    it("evil-block-201", () => {
      window.evil_201 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
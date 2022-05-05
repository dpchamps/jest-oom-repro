
  describe("some-evil-spec=982", () => {
    it("evil-block-982", () => {
      window.evil_982 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  
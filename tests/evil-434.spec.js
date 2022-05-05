
  describe("some-evil-spec=434", () => {
    it("evil-block-434", () => {
      window.evil_434 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  